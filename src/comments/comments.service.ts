import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comments } from 'src/models/Comment.model';

@Injectable()
export class CommentsService {
    constructor(@InjectModel(Comments) private CommentModel:typeof Comments){}

    async getAllComments(){
        let Comments = await this.CommentModel.findAll()
        return Comments
    }

    async getSingle(id:string){
        let Comment = await this.CommentModel.findByPk(id)
        return Comment
    }

    async createComment(payload: Partial<Comments>){
        let newComment = await this.CommentModel.create(payload)
        return newComment
    }

    async updateComment(id:string, payload:Partial<Comments>){
        let [rowsUpdated, [updatedComment]] = await this.CommentModel.update(payload, {
            where: {comment_id: id },
            returning:true
        })

        if(!rowsUpdated){
            throw new Error('Comment not found');
        }

        return updatedComment
    }

    async deleteComment(id:string){
        let deletedComment = await this.CommentModel.findByPk(id)

        if(!deletedComment){
            throw new Error('Comment not found');
        }

        await deletedComment.destroy()
        return { message: "Comment deleted successfully"}
    }
}
