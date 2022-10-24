import { Module } from '@nestjs/common';
import { ConfService } from './conf.service';

@Module({
  providers: [ConfService]
})
export class ConfModule {}
