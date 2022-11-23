import exp from 'constants';
import * as mongoose from 'mongoose';

export const EmployeeScheme = new mongoose.Schema({
  name: { type: String },
  salary: { type: Number },
  currency: { type: String },
  on_contract: { type: Boolean },
  department: { type: String },
  sub_department: { type: String },
});
// export class Employee {
//   constructor(
//     public name: string,
//     public salary: number,
//     public currency: string,
//     public on_contract: boolean,
//     public department: string,
//     public sub_department: string,
//   ) {}
// }

export interface Employee extends mongoose.Document {
  // to handle the save() error
  name: string;
  salary: number;
  currency: string;
  on_contract: boolean;
  department: string;
  sub_department: string;
}
