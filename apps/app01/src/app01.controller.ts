import { Controller, Get } from '@nestjs/common';
import { App01Service } from './app01.service';

@Controller()
export class App01Controller {
  constructor(private readonly app01Service: App01Service) {}

  @Get()
  getHello(): string {
    return this.app01Service.getHello();
  }
}
