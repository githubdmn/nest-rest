import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from './conf';
import { CardEntity, UserEntity } from './entities';
import { CardModule } from './card/card.module';

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
    CardModule,
  ],
  controllers: [],
  providers: [],
})
export class Dummy2203Module {}
