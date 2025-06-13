import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAll(): string {
    return 'All users';
  }

  getById(id:string){
    return `User with ${id} ID`
  }

  createUser(payload: object){
    return payload
  }

  updateUser(id:string,payload:object){
    return `User with ${id} ID updated`
  }

  deleteUser(id:string){
    return `User with ${id} deleted successfully`
  }
}
