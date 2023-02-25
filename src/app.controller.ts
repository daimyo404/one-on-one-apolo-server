import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  async getHello(@Req() req: Request, @Res() res: Response): Promise<any> {
    const q = req.query.q;
    console.log(q);
    const hoge = await this.appService.getHello(req);
    res.status(200).send(`テスト${hoge}`);
  }
}
