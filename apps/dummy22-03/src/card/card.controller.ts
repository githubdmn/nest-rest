import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDto } from './dto';

@Controller('card')
export class CardController {
  constructor(private card: CardService) {}

  @Post('')
  async createCard(@Body() body: CreateCardDto) {
    return await this.card.createCard(body);
  }

  @Get('')
  async getCard(@Param('id') id: string) {
    return await this.card.getCard(id);
  }
}
