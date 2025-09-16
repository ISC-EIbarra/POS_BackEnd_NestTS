import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! this is an Nest App';
  }

  postHello(): string {
    return 'Desde @Post';
  }

  getUpdate(): string {
    return 'Desde Put';
  }
}
