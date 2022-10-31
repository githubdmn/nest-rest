import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';
import { env } from './conf';

@Module({
  imports: [
    PostModule,
    MongooseModule.forRoot(
      `mongodb://${env.mongouser}:${env.mongopass}@localhost:${env.mongoport}/${env.mongoAuth}`,
      { dbName: env.mongodb },
    ),
  ],
  controllers: [],
  providers: [],
})
export class Dummy2201Module {}
