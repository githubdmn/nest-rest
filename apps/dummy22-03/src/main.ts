import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { env } from './conf';
import { Dummy2203Module } from './dummy22-03.module';

async function bootstrap() {
  console.log(`\n\n\n\nDummy22-03  listening on port: ${env.port}`);
  const app = await NestFactory.create(Dummy2203Module);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(env.port);
}
bootstrap();
