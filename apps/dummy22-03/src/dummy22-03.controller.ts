import { Controller, Get } from '@nestjs/common';
import { Dummy2203Service } from './dummy22-03.service';

@Controller()
export class Dummy2203Controller {
  constructor(private readonly dummy2203Service: Dummy2203Service) {}

  @Get()
  getHello(): string {
    return this.dummy2203Service.getHello();
  }
}
