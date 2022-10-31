import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { customAlphabet } from 'nanoid';
import { Post, PostDocument } from '../schema';
import { CreatePostDTO, PostDTO } from './dtos';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async getPosts(): Promise<any> {
    return await this.postModel.find();
  }

  async getPost(title = '', author = ''): Promise<any> {
    if (title.length > 0 && author.length === 0)
      return await this.postModel.findOne({ title: title });
    if (title.length === 0 && author.length > 0)
      return await this.postModel.findOne({ author: author });
    return await this.postModel.findOne({ title: title, author: author });
  }

  async getPostById(_id: number): Promise<any> {
    return await this.postModel.findOne({ id: _id });
  }

  async createPost(_post: CreatePostDTO) {
    const exists = await this.getPost(_post.title, _post.author);
    if (exists !== null)
      return `Post with title: ${_post.title} form author: ${_post.author} already exists`;
    const nanoid = customAlphabet('1234567890', 5);
    const newPost = {
      id: nanoid(),
      ..._post,
    };
    return await this.postModel.insertMany(newPost);
  }

  async updatePost(_id: number, _post: Partial<PostDTO>) {
    return await this.postModel.findOneAndUpdate({ id: _id }, _post);
  }

  async deletePost(_id: number) {
    return await this.postModel.findOneAndRemove({ id: _id });
  }
}
