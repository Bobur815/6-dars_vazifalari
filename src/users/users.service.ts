import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Posts } from 'src/models/Post.model';
import { User } from 'src/models/User.model';
import { userDto } from './dto/users.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userModel: typeof User){}

    async getAll(){
        let users = await this.userModel.findAll({
            include:[Posts]
        })
        return users
    }

    async getSingle(id:string){
        let user = await this.userModel.findByPk(id)
        return user
    }

    async createUser(payload: Required<userDto>){
        try {
            let newUser = await this.userModel.create(payload)
            return newUser
        } catch (error) {
            if(error.name=='SequelizeUniqueConstraintError'){
                throw new ConflictException(error.errors[0].message)
            }
        }
    }

    async updateUser(id: string, payload: Required<userDto>) {
        let [rowsUpdated, [updatedUser]] = await this.userModel.update(payload, {
          where: { userId: id },
          returning: true,
        });
      
        if (rowsUpdated === 0) {
          throw new Error('User not found');
        }
      
        return updatedUser;
    }

    async deleteUser(id:string){
        let user = await this.userModel.findByPk(id)
        if (!user) {
            throw new Error('User not found');
        }

        await user.destroy()
        return { message: "User deleted successfully"}
    }
      
}
