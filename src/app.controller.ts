import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("api/users")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): string {
    return this.appService.getAll();
  }

  @Get(":id")
  getById(@Param('id') id: string){
    return this.appService.getById(id)
  }

  @Post()
  create(@Body() body: object){
    return this.appService.createUser(body)
  }

  @Put(":id")
  update(@Param('id') id:string, @Body() body: object){
    return this.appService.updateUser(id,body)
  }

  @Delete(":id")
  deleteUser(@Param('id') id:string){
    return this.appService.deleteUser(id)
  }
}
