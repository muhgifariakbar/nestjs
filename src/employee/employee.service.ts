import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import e from 'express';
import { Model } from 'mongoose';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  private employee: Employee[] = []; //tempat mo narok data //dan cuma bisa diakses via ini (nggk bisa dari luar or manapun)

  constructor(
    @InjectModel('Employee') private readonly employeeModel: Model<Employee>,
  ) {}

  async createEmployee(
    // id: number,
    name: string,
    salary: number,
    currency: string,
    on_contract: boolean,
    department: string,
    sub_department: string,
  ) {
    // const employeeId = Math.floor(Math.random() * 10);
    const newEmployee = new this.employeeModel({
      //   employeeId,
      name,
      salary,
      currency,
      on_contract,
      department,
      sub_department,
    });

    // this.employee.push(newEmployee);
    const result = await newEmployee.save(); //emang di provide mongoose
    console.log(result);
    return `Congrats, new employee has been added with id:${result._id} ` as string;
  }

  async fetchAllEmployee() {
    const result = await this.employeeModel.aggregate([
      { $group: { _id: 'department', avg_val: { $avg: '$salary' } } },
    ]);
    // return result.map((e) => ({
    //   id: e._id,
    //   name: e.name,
    //   salary: e.salary,
    //   currency: e.currency,
    //   on_contract: e.on_contract,
    //   department: e.department,
    //   sub_department: e.sub_department,
    // }));
    return result;
  }

  async getSingleEmployee(employeeId: string) {
    const employee = await this.findEmployee(employeeId);
    return {
      //   id: employee.id,
      name: employee.name,
      salary: employee.salary,
      currency: employee.currency,
      on_contract: employee.on_contract,
      department: employee.department,
      sub_department: employee.sub_department,
    };
  }

  async updateEmployeeName(
    employeeId: string,
    name: string,
    salary: number,
    department: string,
  ) {
    const updateEmployee = await this.findEmployee(employeeId);
    if (name) updateEmployee.name = name;
    if (salary) updateEmployee.salary = salary;
    if (department) updateEmployee.department = department;
    updateEmployee.save();
  }

  private async findEmployee(id: string): Promise<Employee> {
    let employee;
    try {
      employee = await this.employeeModel.findById(id);
    } catch (error) {
      throw new NotFoundException('Could not find the intended employee');
    }

    if (!employee) {
      throw new NotFoundException('Could not find the intended employee');
    }
    return employee;
    // return {
    //   //   id: employee.id,
    //   name: employee.name,
    //   salary: employee.salary,
    //   currency: employee.currency,
    //   on_contract: employee.on_contract,
    //   department: employee.department,
    //   sub_department: employee.sub_department,
    // };
  }

  async deleteEmployee(prodId: string) {
    const result = await this.employeeModel.deleteOne({ _id: prodId }).exec();
    console.log(result);

    if (result.deletedCount === 0) {
      throw new NotFoundException('Could not find the intended employee');
    }
  }
}
('Could not find the intended employee');
