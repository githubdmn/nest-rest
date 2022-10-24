import { Module } from '@nestjs/common';
import { Dummy2201Controller } from './dummy22-01.controller';
import { Dummy2201Service } from './dummy22-01.service';
import { PostModule } from './post/post.module';

@Module({
  imports: [PostModule],
  controllers: [Dummy2201Controller],
  providers: [Dummy2201Service],
})
export class Dummy2201Module {}
