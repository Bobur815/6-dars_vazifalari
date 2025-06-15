import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Posts } from 'src/models/Post.model';

@Module({
    imports:[SequelizeModule.forFeature([Posts])],
    controllers:[PostsController],
    providers: [PostsService]
})
export class PostsModule {}
