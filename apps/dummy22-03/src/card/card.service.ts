import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CardEntity } from '../entities';
import { Repository } from 'typeorm';
import { CreateCardDto, UpdateCardDto } from './dto';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(CardEntity)
    private cardRepository: Repository<CardEntity>,
  ) {}

  async createCard(card: CreateCardDto) {
    const created = await this.cardRepository.create(card);
    return await this.cardRepository.save(created);
  }

  async getCard(id: string) {
    return await this.cardRepository.findOneBy({ cardId: id });
  }

  async getCards(userId: string) {
    const cards = await this.cardRepository.find({
      where: {
        userId: userId,
      },
    });
    return cards.map((card) => ({ ...card, userId: userId }));
  }

  async updateCard(card: UpdateCardDto) {
    return await this.cardRepository.update(card.cardId, card);
  }

  async updatePartialCard(card: UpdateCardDto) {
    return await this.cardRepository.update(card.cardId, card);
  }

  async deleteCard(cardId: string) {
    const card = await this.getCard(cardId);
    return await this.cardRepository.remove(card);
    // return await this.cardRepository.delete({ cardId: cardId });
  }

  async deleteCards(userId: string) {
    const cards = await this.getCards(userId);
    const results = [];
    for (const card of cards) {
      results.push(await this.cardRepository.delete({ cardId: card.cardId }));
    }
    return results; //await this.cardRepository.delete({ userId: userId });
  }
}
