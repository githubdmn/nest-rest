import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';
import { env } from './conf';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardModule } from './card/card.module';
import { CardEntity } from './entities';

@Module({
  imports: [
    PostModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      schema: 'public',
      database: env.pgdb,
      host: env.host,
      port: env.pgport,
      username: env.pguser,
      password: env.pgpassword,
      synchronize: true,
      entities: [CardEntity],
    }),
    MongooseModule.forRoot(
      `mongodb://${env.mongouser}:${env.mongopass}@localhost:${env.mongoport}/${env.mongoAuth}`,
      { dbName: env.mongodb },
    ),
    CardModule,
  ],
  controllers: [],
  providers: [],
})
export class Dummy2201Module {}
