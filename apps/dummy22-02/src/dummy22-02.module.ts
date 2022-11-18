import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from './conf';
import { CardModule } from './card/card.module';
import { CardEntity } from './entities';

// https://github.com/skunight/nestjs-redis/issues/97
// https://medium.com/@jonathan.pretre91/authentification-with-nestjs-and-clean-architecture-182e44a7ed07
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
      entities: [CardEntity],
    }),
    // MongooseModule.forRoot(
    //   `mongodb://${env.mongouser}:${env.mongopass}@localhost:${env.mongoport}/${env.mongoAuth}`,
    //   { dbName: env.mongodb },
    // ),
    CardModule,
  ],
  controllers: [],
  providers: [],
})
export class Dummy2202Module {}
