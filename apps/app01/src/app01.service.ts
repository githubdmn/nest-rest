import { Injectable } from '@nestjs/common';

@Injectable()
export class App01Service {
  getHello(): string {
    return 'Hello World!';
  }
}
