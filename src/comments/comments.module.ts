import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { Comments } from 'src/models/Comment.model';

@Module({
    imports:[SequelizeModule.forFeature([Comments])],
    controllers:[CommentsController],
    providers: [CommentsService]
})
export class CommentsModule {}
