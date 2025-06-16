import { Module, OnModuleInit } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/User.model';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { Posts } from './models/Post.model';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CommentsModule } from './comments/comments.module';
import { Comments } from './models/Comment.model';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    SequelizeModule.forRootAsync({
      imports:[ConfigModule],
      useFactory:(configService: ConfigService) => ({
        dialect:"postgres",
        port:+configService.get("DB_PORT"),
        host:configService.get("DB_HOST"),
        username:configService.get("DB_USERNAME"),
        database:configService.get("DB_DATABASE"),
        password:configService.get("DB_PASSWORD"),
        autoLoadModels:true,
        synchronize:true,
        models:[User,Posts,Comments]
      }),
      inject:[ConfigService],
    }),
    UsersModule,
    PostsModule,
    CommentsModule
  ],
})

export class AppModule  {}
