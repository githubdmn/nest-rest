import { Controller, Get } from '@nestjs/common';
@Controller('post')
export class PostController {
  @Get()
  first(): string {
    return 'todo';
  }
}
