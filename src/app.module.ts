import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { MongooseModule } from '@nestjs/mongoose'; //1

let mongo_address = process.env.mongo_address;
@Module({
  imports: [EmployeeModule, MongooseModule.forRoot(mongo_address)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
