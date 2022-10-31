import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePostDTO, PostDTO } from './dtos';
import { PostService } from './post.service';
@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get('/posts')
  async getPosts() {
    return await this.postService.getPosts();
  }

  @Get('/:id')
  async name(@Param('id') id: string) {
    return this.postService.getPostById(parseInt(id));
  }

  @Post('')
  async createPost(@Body() _post: CreatePostDTO) {
    return await this.postService.createPost(_post);
  }

  @Patch('')
  async updatePost(@Body() _post: Partial<PostDTO>) {
    return await this.postService.updatePost(_post.id, _post);
  }

  @Delete('/:id')
  async deletePost(@Param('id') id: string) {
    return this.postService.deletePost(parseInt(id));
  }
}
