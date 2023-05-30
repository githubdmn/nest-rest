import { customAlphabet } from 'nanoid';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import Card from './card.entity';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  userId: string;
  @Column({ unique: true })
  username: string;
  @Column()
  password: string;
  @Column()
  fullname: string;
  @Column({ unique: true })
  email: string;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
  @BeforeInsert()
  generateId() {
    const nanoid = customAlphabet('1234567890', 5);
    this.userId = nanoid();
  }
  @OneToMany((type) => Card, (card) => card.userId, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  cards: Card[];
}
