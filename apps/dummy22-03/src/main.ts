import { NestFactory } from '@nestjs/core';
import { Dummy2203Module } from './dummy22-03.module';

async function bootstrap() {
  const app = await NestFactory.create(Dummy2203Module);
  await app.listen(3000);
}
bootstrap();
