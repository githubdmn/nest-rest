import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { env } from './conf';
import { Dummy2201Module } from './dummy22-01.module';

async function bootstrap() {
  console.log(env.environment);
  const app = await NestFactory.create(Dummy2201Module);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(env.port);
}
bootstrap();
