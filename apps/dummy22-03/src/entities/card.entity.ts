import { customAlphabet } from 'nanoid';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import User from './user.entity';

@Entity()
export default class Card {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  cardId: string;
  @Column()
  title: string;
  @Column()
  text: string;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
  @BeforeInsert()
  generateId() {
    const nanoid = customAlphabet('1234567890', 5);
    this.cardId = nanoid();
  }
  @ManyToOne((type) => User, (user) => user.userId, {
    cascade: true,
    createForeignKeyConstraints: false,
    eager: true,
  })
  @JoinColumn({ name: 'userId', referencedColumnName: 'userId' })
  userId: string;
}
