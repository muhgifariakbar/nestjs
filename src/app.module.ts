import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { MongooseModule } from '@nestjs/mongoose'; //1

@Module({
  imports: [
    EmployeeModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:12345@cluster0.iwx76dq.mongodb.net/Employee?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
