import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CardService } from './card.service';
import { CardDto, CreateCardDto } from './dto';

@Controller('card')
export class CardController {
  constructor(private cardService: CardService) {}

  @Post()
  async createCard(@Body() card: CreateCardDto) {
    return await this.cardService.createCard(card);
  }

  @Get('all')
  async getCards() {
    return await this.cardService.getCards();
  }

  @Get(':id')
  async getCard(@Param('id') id: string) {
    return await this.cardService.getCard(id);
  }

  @Patch()
  async updateCard(@Body() card: Partial<CardDto>) {
    return await this.cardService.updateCard(card);
  }

  @Delete(':id')
  async delete(@Param('card_id') id: string) {
    return await this.cardService.deleteCard(id);
  }
}
