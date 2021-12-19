import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Post {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    texto: string
}