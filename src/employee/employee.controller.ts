import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { stringify } from 'querystring';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @UseGuards()
  @Post()
  addEmployee(
    // @Body()
    // completeBody: {
    //   name: string;
    //   salary: number;
    //   currency: string;
    //   on_contract: boolean;
    //   department: string;
    //   sub_department: string;
    // },//bisa dibuat kayak gini juga
    @Body('name') prodName: string,
    @Body('salary') prodSalary: number,
    @Body('currency') prodCurrency: string,
    @Body('on_contract') prodOn_Contract: boolean,
    @Body('department') prodDepartment: string,
    @Body('sub_department') prodSub_Department: string,
  ): any {
    this.employeeService.createEmployee(
      prodName,
      prodSalary,
      prodCurrency,
      prodOn_Contract,
      prodDepartment,
      prodSub_Department,
    );
    return `success from controller`;
  }

  @Get()
  async getAllEmployee() {
    const employee = await this.employeeService.fetchAllEmployee();
    return employee;
  }

  @Get(':id')
  getDetail(@Param('id') prodId: string) {
    return this.employeeService.getSingleEmployee(prodId);
  }

  @Patch(':id')
  async updateEmployee(
    @Param('id') prodId: string,
    @Body('name') prodName: string,
    @Body('salary') prodSalary: number,
    @Body('department') prodDepartment: string,
  ) {
    await this.employeeService.updateEmployeeName(
      prodId,
      prodName,
      prodSalary,
      prodDepartment,
    );
    return 'employee data has been updated';
  }

  @Delete(':id')
  async removeEmployee(@Param('id') prodId: string) {
    await this.employeeService.deleteEmployee(prodId);
    return 'employee has been removed';
  }
}
