import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserEntity } from '../entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './dto';
import utils from './../utils';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
  ) {}

  async registerUser(user: Partial<UserDto>) {
    const hashedPassword = await utils.hashString(user.password);
    const newUser = this.userRepo.create({
      ...user,
      password: hashedPassword,
      created_at: new Date(),
      updated_at: new Date(),
    });

    try {
      const savedUser = await this.userRepo.save(newUser);
      return savedUser;
    } catch (error) {
      throw new HttpException(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getUser(id: string) {
    try {
      const user = await this.userRepo.findOneBy({ userId: id });
      return Object.is(user, null)
        ? `User with id ${id} does not exist.`
        : user;
    } catch (error) {
      throw new HttpException(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateUser(id: string, newData: Partial<UserDto>) {
    try {
      const user = await this.userRepo.findOneBy({ userId: id });
      if (Object.is(user, null)) return `User with id ${id} does not exist.`;
      Object.assign(user, newData);
      return this.userRepo.save({
        ...user,
        updated_at: new Date(),
      });
    } catch (error) {
      throw new HttpException(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteUser(id: string) {
    try {
      const user = await this.userRepo.findOneBy({ userId: id });
      return Object.is(user, null)
        ? `User with id ${id} does not exist.`
        : this.userRepo.remove(user);
    } catch (error) {
      throw new HttpException(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
