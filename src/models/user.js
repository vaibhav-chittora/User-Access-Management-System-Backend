import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import bcrypt from "bcrypt";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  role: "Employee" | "Manager" | "Admin";

  @BeforeInsert()
  async hashedPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
