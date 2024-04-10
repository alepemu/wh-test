import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/* eslint-disable indent */

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  username: string;

  @Column("varchar")
  password: string;
}
