import { Module } from '@nestjs/common';
import { Dummy2203Controller } from './dummy22-03.controller';
import { Dummy2203Service } from './dummy22-03.service';

@Module({
  imports: [],
  controllers: [Dummy2203Controller],
  providers: [Dummy2203Service],
})
export class Dummy2203Module {}
