import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Comments } from 'src/models/Comment.model';
import { CommentsService } from './comments.service';

@Controller('api')
export class CommentsController {
    constructor(private readonly commentService: CommentsService){}

    @Get('comments/all')
    getAll(){
        return this.commentService.getAllComments()
    }

    @Get('comments/:id')
    getSingle(@Param('id') id:string){
        return this.commentService.getSingle(id)
    }

    @Post('comments')
    create(@Body() data: Required<Comments>){
        return this.commentService.createComment(data)
    }

    @Put('comments/:id')
    update(@Body() data: Required<Comments>, @Param('id') id:string){
        return this.commentService.updateComment(id, data)
    }

    @Delete('comments/:id')
    deleteComment(@Param('id') id:string){
        return this.commentService.deleteComment(id)
    }
}
