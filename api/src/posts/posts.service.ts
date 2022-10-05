import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, StringExpressionOperatorReturningString } from "mongoose";
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostDocument, Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model < PostDocument>){
  }
  async create(createPostDto: CreatePostDto) {
    // create model
    const post = new this.postModel(createPostDto)
    return post.save();
  }

  async findAll() {
    return await this.postModel.find().exec();
  }

  async findOne(id: string) {
    return await this.postModel.findById(id).exec();
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const post = await this.postModel.findByIdAndUpdate(id, updatePostDto, {new:true}).exec()
    return post;
  }

  async remove(id: string) {
    const post = await this.postModel.findByIdAndRemove(id).exec();
    if(!post) {
      throw new NotFoundException();
    }
    return post;
  }
}
