import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, QueryFailedError, Repository } from 'typeorm';
import { CardEntity } from '../entities';
import { CardDto, CreateCardDto } from './dto';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(CardEntity)
    private cardRepository: Repository<CardEntity>,
  ) {}

  async createCard(card: CreateCardDto): Promise<CardEntity> {
    const newCard = this.cardRepository.create(card);
    try {
      return await this.cardRepository.save(newCard);
    } catch (error) {
      throw new HttpException(
        'An error occurred while creating ',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getCard(card_id: string): Promise<CardEntity> {
    try {
      // return await this.cardRepository.findOne({ where: [{ id: id }] });
      return await this.cardRepository.findOneByOrFail({ card_id: card_id });
    } catch (e) {
      if (e instanceof QueryFailedError)
        throw new InternalServerErrorException(e.message);
      if (e instanceof EntityNotFoundError)
        throw new NotFoundException(`CardEntity with id: ${card_id} not found`);
      throw e;
    }
  }

  async getCards(): Promise<[CardEntity[], number]> {
    try {
      return await this.cardRepository.findAndCount();
    } catch (e) {
      if (e instanceof QueryFailedError)
        throw new InternalServerErrorException(e.message);
      if (e instanceof EntityNotFoundError)
        throw new NotFoundException(`No cards were saved in database`);
      throw e;
    }
  }

  async updateCard(newcard: Partial<CardDto>): Promise<CardEntity> {
    try {
      const oldcard = await this.getCard(newcard.card_id);
      oldcard.title = newcard.title;
      oldcard.body = newcard.body;
      return await this.cardRepository.save(oldcard);
    } catch (e) {
      throw e;
    }
  }

  async deleteCard(card_id: string): Promise<CardEntity> {
    try {
      const card = await this.getCard(card_id);
      return await this.cardRepository.remove(card);
    } catch (e) {
      throw e;
    }
  }
}
