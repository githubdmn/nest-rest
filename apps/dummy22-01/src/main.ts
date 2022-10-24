import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { Dummy2201Module } from "./dummy22-01.module";

async function bootstrap() {
  const app = await NestFactory.create(Dummy2201Module);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(8022);
}
bootstrap();
