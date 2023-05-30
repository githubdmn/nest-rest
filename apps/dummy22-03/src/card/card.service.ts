import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CardEntity } from '../entities';
import { Repository } from 'typeorm';
import { CreateCardDto } from './dto';

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

  // async getCards(user_id: string) {}

  // //TODO: update card DTO
  // async updateCard(id: string) {}

  // async deleteCard(id: string) {}
}
