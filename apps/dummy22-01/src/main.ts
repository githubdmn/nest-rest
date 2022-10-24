import { NestFactory } from '@nestjs/core';
import { Dummy2201Module } from './dummy22-01.module';

async function bootstrap() {
  const app = await NestFactory.create(Dummy2201Module);
  await app.listen(3000);
}
bootstrap();
