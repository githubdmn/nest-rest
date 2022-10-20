import { NestFactory } from '@nestjs/core';
import { App01Module } from './app01.module';

async function bootstrap() {
  const app = await NestFactory.create(App01Module);
  await app.listen(3000);
}
bootstrap();
