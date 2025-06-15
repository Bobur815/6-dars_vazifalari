import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Posts } from 'src/models/Post.model';

@Injectable()
export class PostsService {
    constructor(@InjectModel(Posts) private postModel:typeof Posts){}

    async getAllPosts(){
        let posts = await this.postModel.findAll()
        return posts
    }

    async getSingle(id:string){
        let post = await this.postModel.findByPk(id)
        return post
    }

    async createPost(payload: Partial<Posts>){
        let newPost = await this.postModel.create(payload)
        return newPost
    }

    async updatePost(id:string, payload:Partial<Posts>){
        let [rowsUpdated, [updatedPost]] = await this.postModel.update(payload, {
            where: { id },
            returning:true
        })

        if(!rowsUpdated){
            throw new Error('Post not found');
        }

        return updatedPost
    }

    async deletePost(id:string){
        let deletedPost = await this.postModel.findByPk(id)

        if(!deletedPost){
            throw new Error('Post not found');
        }

        await deletedPost.destroy()
        return { message: "Post deleted successfully"}
    }
}
