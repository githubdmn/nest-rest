import { Controller, Get } from '@nestjs/common';
import { Dummy2201Service } from './dummy22-01.service';

@Controller()
export class Dummy2201Controller {
  constructor(private readonly dummy2201Service: Dummy2201Service) {}

  @Get()
  getHello(): string {
    return this.dummy2201Service.getHello();
  }
}
