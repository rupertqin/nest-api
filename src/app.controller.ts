import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('search-university')
  searchUniversity(@Query('name') name): string[] {
    return this.appService.searchUniversity(name);
  }
}
