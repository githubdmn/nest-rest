import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { map, Observable } from 'rxjs';

@Injectable()
export default class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    // console.log(context.getArgs()[0].body);

    return next.handle().pipe(
      map((data: any) =>
        plainToInstance(this.dto, data, {
          excludeExtraneousValues: true,
          exposeUnsetFields: false,
        }),
      ),
    );
  }
}
