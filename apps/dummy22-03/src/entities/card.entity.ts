import { customAlphabet } from 'nanoid';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Card {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  card_id: string;
  @Column()
  title: string;
  @Column()
  text: string;
  @BeforeInsert()
  generateId() {
    const nanoid = customAlphabet('1234567890', 5);
    this.card_id = nanoid();
  }
}
