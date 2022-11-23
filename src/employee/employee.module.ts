import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeController } from './employee.controller';
import { EmployeeScheme } from './employee.model';
import { EmployeeService } from './employee.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeScheme }]),
  ], //buat share data dan bisa di inject, array karena isinya bisa banyak
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
