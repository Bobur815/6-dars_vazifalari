import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from 'src/models/User.model';

@Module({
    imports:[SequelizeModule.forFeature([User])], 
    controllers:[UsersController],
    providers:[UsersService]
})
export class UsersModule {}
