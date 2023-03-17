import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { log } from 'console';
import { Observable, map } from 'rxjs';

@Injectable()
export default class SerializerExcludeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    //log(context.switchToHttp().getRequest().body);
    return next
      .handle()
      .pipe(map((data: any) => plainToInstance(this.dto, data)));
  }
}
