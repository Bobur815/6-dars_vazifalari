import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Posts } from 'src/models/Post.model';

@Controller('api')
export class PostsController {
    constructor(private readonly postService: PostsService){}

    @Get('posts')
    getAll(){
        return this.postService.getAllPosts()
    }

    @Get('posts/:id')
    getSingle(@Param('id') id:string){
        return this.postService.getSingle(id)
    }

    @Post('posts')
    create(@Body() data: Required<Posts>){
        return this.postService.createPost(data)
    }

    @Put('posts/:id')
    update(@Body() data: Required<Posts>, @Param('id') id:string){
        return this.postService.updatePost(id, data)
    }

    @Delete('posts/:id')
    deletePost(@Param('id') id:string){
        return this.postService.deletePost(id)
    }
}
