import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../users/user.interface';

@Injectable()
export class UppercaseOutputInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        // Dacă e o listă de users
        if (Array.isArray(data)) {
          return data.map((user: User) => ({
            ...user,
            name: user.name.toUpperCase(),
          }));
        }

        // Dacă e un singur user
        if (data && typeof data === 'object' && 'name' in data) {
          return {
            ...data,
            name: (data as User).name.toUpperCase(),
          };
        }

        // Altfel returnăm valoarea originală
        return data;
      }),
    );
  }
}
