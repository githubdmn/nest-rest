import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, QueryFailedError, Repository } from 'typeorm';
import { CardEntity } from '../entities';
import { CardDto, CreateCardDto } from './dto';
import { CacheService } from '../cache/cache.service';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(CardEntity)
    private cardRepository: Repository<CardEntity>,
    private cacheService: CacheService,
  ) {}

  async createCard(card: CreateCardDto): Promise<CardEntity> {
    const newCard = this.cardRepository.create(card);
    try {
      const savedCard = await this.cardRepository.save(newCard);
      if (savedCard !== null) {
        const cacheResult = await this.cacheService.cache(
          newCard.card_id,
          newCard,
        );
        await this.cacheService.delete('all_cards');
        if (cacheResult !== 'OK') throw 'Failed to cache';
      }
      return savedCard;
    } catch (error) {
      throw new HttpException(`${error}`, HttpStatus.BAD_REQUEST);
    }
  }

  async getCard(card_id: string): Promise<CardEntity> {
    try {
      const fromCache = await this.cacheService.get(card_id);
      if (fromCache !== null) return fromCache as CardEntity;
      return await this.cardRepository.findOne({
        where: [{ card_id: card_id }],
      });
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
      const fromCache = await this.cacheService.get('all_cards');
      if (fromCache !== null) return fromCache as [CardEntity[], number];
      const allCards = await this.cardRepository.findAndCount();
      const saveToCache = await this.cacheService.cache('all_cards', allCards);
      if (saveToCache !== 'OK') throw 'Failed to cache';
      return allCards;
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
      await this.cacheService.delete('all_cards');
      await this.cacheService.delete(newcard.card_id);
      const oldcard = await this.getCard(newcard.card_id);
      Object.assign(oldcard, newcard);
      const updatedCard = await this.cardRepository.save(oldcard);
      if (updatedCard !== null) {
        const cacheResult = await this.cacheService.cache(
          updatedCard.card_id,
          updatedCard,
        );
        if (cacheResult !== 'OK') throw 'Failed to cache';
      }
      return updatedCard;
    } catch (e) {
      throw e;
    }
  }

  async deleteCard(card_id: string): Promise<CardEntity> {
    try {
      await this.cacheService.delete('all_cards');
      await this.cacheService.delete(card_id);
      const card = await this.getCard(card_id);
      return await this.cardRepository.remove(card);
    } catch (e) {
      throw e;
    }
  }
}
