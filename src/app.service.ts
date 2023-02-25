import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(req): Promise<string> {
    return `Hello World!${req.query.q}`;
  }
}
