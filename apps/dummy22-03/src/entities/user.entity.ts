import { customAlphabet } from 'nanoid';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  user_id: string;
  @Column()
  username: string;
  @Column()
  password: string;
  @BeforeInsert()
  generateId() {
    const nanoid = customAlphabet('1234567890', 5);
    this.user_id = nanoid();
  }
}
