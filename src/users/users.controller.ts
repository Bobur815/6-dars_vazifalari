import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/models/User.model';
import { userDto } from './dto/users.dto';

@Controller('api')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    @Get('users/all')
    getAllUsers(){
        return this.userService.getAll()
    }

    @Get('users/:id')
    getSingle(@Param('id') id: string){
        return this.userService.getSingle(id)
    }

    @Post('users')
    createUser(@Body() payload: Required<userDto>){
        return this.userService.createUser(payload)
    }

    @Put('users/:id')
    updateUser(@Param('id') id:string, @Body() payload: Required<userDto>){
        return this.userService.updateUser(id,payload)
    }

    @Delete('users/:id')
    deleteUser(@Param('id') id: string){
        return this.userService.deleteUser(id)
    }
}
