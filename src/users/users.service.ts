import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/models/User.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userModel: typeof User){}

    async getAll(){
        let users = await this.userModel.findAll()
        return users
    }

    async getSingle(id:string){
        let user = await this.userModel.findByPk(id)
        return user
    }

    async createUser(payload: Partial<User>){
        let newUser = await this.userModel.create(payload)
        return newUser
    }

    async updateUser(id: string, payload: Partial<User>) {
        let [rowsUpdated, [updatedUser]] = await this.userModel.update(payload, {
          where: { id },
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
