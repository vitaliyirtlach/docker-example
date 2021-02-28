import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("whales")
export class Whale extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ default: "noname"})
    name: string
}