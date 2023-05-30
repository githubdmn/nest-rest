import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Response,
} from '@nestjs/common';

import { UserDto, CreateUserDto } from './dto';
import { SerializeExclude, SerializeExpose } from '../interceptors';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @SerializeExclude(UserDto)
  async register(@Body() user: CreateUserDto) {
    return await this.userService.registerUser(user);
  }

  @Get(':id')
  @SerializeExclude(UserDto)
  async get(@Param('id') id: string) {
    return await this.userService.getUser(id);
  }

  @Put(':id')
  @SerializeExclude(UserDto)
  async replace(@Param('id') id: string, @Body() user: CreateUserDto) {
    return await this.userService.updateUser(id, user);
  }

  @Patch(':id')
  @SerializeExclude(UserDto)
  async modify(@Param('id') id: string, @Body() user: Partial<CreateUserDto>) {
    return await this.userService.updateUser(id, user);
  }

  @Delete(':id')
  @SerializeExclude(UserDto)
  async delete(@Param('id') id: string) {
    return await this.userService.deleteUser(id);
  }
}
