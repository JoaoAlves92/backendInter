import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
} from 'typeorm';
import { User } from './User';

@Entity()
export class Pix {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => User, user => user.id)
    @JoinColumn()
    requesting_user: User

    @ManyToOne(() => User, user => user.id, {nullable: true})
    @JoinColumn()
    paying_user: User

    @Column()
    status: string

    @Column()
    value: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    update_at: Date
}