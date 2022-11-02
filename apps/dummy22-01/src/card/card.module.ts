import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardEntity } from '../entities';
import { CardController } from './card.controller';
import { CardService } from './card.service';

@Module({
  controllers: [CardController],
  providers: [CardService],
  imports: [TypeOrmModule.forFeature([CardEntity])],
})
export class CardModule {}
