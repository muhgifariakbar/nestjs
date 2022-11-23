import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//controller cuma buat lean
@Controller() // didalem ('products') -> doamin.com/products
export class AppController {
  constructor(private readonly appService: AppService) {} // ni apa?

  @Get() // didalem ('user') -> doamin.com/products/user
  getHello(): string {
    return this.appService.getHello();
  }
}
