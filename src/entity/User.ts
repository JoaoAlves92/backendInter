import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    account_number: number

    @Column()
    account_digit: number

    @Column()
    wallet: number

    @Column()
    email: string

    @Column()
    password: string

}