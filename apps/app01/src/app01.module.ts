import { Module } from '@nestjs/common';
import { App01Controller } from './app01.controller';
import { App01Service } from './app01.service';

@Module({
  imports: [],
  controllers: [App01Controller],
  providers: [App01Service],
})
export class App01Module {}
