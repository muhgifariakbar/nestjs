import { Injectable } from '@nestjs/common';
// disini buat ngambil database, logic, heavy leifting,
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! anjayyyy';
  }
}
