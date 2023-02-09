import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from './conf';
import { CardEntity, UserEntity } from './entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      schema: 'public',
      database: env.pgdb,
      host: env.host,
      port: env.pgport,
      username: env.pguser,
      password: env.pgpassword,
      synchronize: true,
      entities: [CardEntity, UserEntity],
    }),
  ],
  controllers: [],
  providers: [],
})
export class Dummy2203Module {}
