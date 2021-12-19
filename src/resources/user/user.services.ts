import { getRepository } from "typeorm";
import { User } from "../../entity/User";
import { UserSignIn } from "./dtos/user.signin.dtos";
import { UserSignUp } from "./dtos/user.signup.dtos";
import md5 from 'crypto-js/md5';
import { sign } from 'jsonwebtoken';


export default class UserService {

   async signin(user: UserSignIn) {
        const userRepo = getRepository(User);
        const { email, password } = user;
        const passwordHash = md5(password).toString()
        const existUser = await userRepo.findOne({where: { email, password: passwordHash }})

        if (!existUser) {
            return {msg: 'email ou senha incorretos.'}
        }

        const {secret, expiresIn} = {secret: 'default', expiresIn: '14d'}

        const token = sign({
            firstName: existUser.first_name,
            lastName: existUser.last_name,
            wallet: existUser.wallet,
            accountNumber: existUser.account_number,
            accountDigit: existUser.account_digit
        }, secret, {
            subject: existUser.id,
            expiresIn
        })

        // @ts-expect-error ignore
        delete existUser.password

        return {accessToken: token}

   }

   async signup(user: UserSignUp) {
        const userRepo = getRepository(User);
        const existUser = await userRepo.findOne({where: { email: user.email }})

        if (existUser) {
            return {msg: 'Usuário já cadastrado.'};
        }

        const userData = {
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            password: md5(user.password).toString(),
            wallet: 1000,
            account_number: Math.floor(Math.random() * 999999),
            account_digit: Math.floor(Math.random() * 99)
        }

        const userCreated = await userRepo.save(userData)

        const {secret, expiresIn} = {secret: 'default', expiresIn: '14d'}

        const token = sign({
            firstName: user.first_name,
            lastName: user.last_name,
            wallet: userData.wallet,
            accountNumber: userData.account_number,
            accountDigit: userData.account_digit
        }, secret, {
            subject: userCreated.id,
            expiresIn
        })

        return {access_token: token}
   }
}