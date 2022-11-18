import { NestFactory } from '@nestjs/core';
import { Dummy2202Module } from './dummy22-02.module';
import { env } from './conf';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  console.log(`\n\n\n\nDummy22-02  listening on port: ${env.port}`);
  const app = await NestFactory.create(Dummy2202Module);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(env.port);
}
bootstrap();
