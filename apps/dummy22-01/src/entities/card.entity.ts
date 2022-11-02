import { customAlphabet } from 'nanoid';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class CardEntity {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  card_id: string;
  @Column()
  title: string;
  @Column()
  body: string;
  @BeforeInsert()
  generateId() {
    const nanoid = customAlphabet('1234567890', 5);
    this.card_id = nanoid();
  }
}
