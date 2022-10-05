import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { MongooseModule } from "@nestjs/mongoose";


@Module({
  imports: [PostsModule, MongooseModule.forRoot('mongodb+srv://dnmartinez:pwd123@cluster0.55luioe.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
