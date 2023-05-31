import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDto, UpdateCardDto } from './dto';

@Controller('card')
export class CardController {
  constructor(private card: CardService) {}

  @Post('')
  async createCard(@Body() body: CreateCardDto) {
    return await this.card.createCard(body);
  }

  @Get('/:id')
  async getCard(@Param('id') id: string) {
    return await this.card.getCard(id);
  }

  @Put('')
  async updateCard(@Body() body: UpdateCardDto) {
    return await this.card.updateCard(body);
  }

  @Patch('')
  async updatePartialCard(@Body() body: UpdateCardDto) {
    return await this.card.updateCard(body);
  }

  @Delete('/:id')
  async deleteCard(@Param('id') cardId: string) {
    return await this.card.deleteCard(cardId);
  }

  @Get('cards/:id')
  async getCards(@Param('id') user_id: string) {
    return await this.card.getCards(user_id);
  }

  @Delete('cards/:id')
  async deleteCards(@Param('id') userId: string) {
    return await this.card.deleteCards(userId);
  }
}
