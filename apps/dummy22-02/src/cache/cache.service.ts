import { RedisService } from '@liaoliaots/nestjs-redis';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CacheService {
  constructor(private readonly redisService: RedisService) {}

  async saveToCache() {
    const t = {
      name: 'Nova',
      number: 5,
    };
    return await this.redisService.getClient().set('prvi', JSON.stringify(t));
  }

  async cache(key: string, value: unknown) {
    return await this.redisService.getClient().set(key, JSON.stringify(value));
  }
  async delete(key: string) {
    return await this.redisService.getClient().del(key);
  }

  async get(key: string) {
    const result = await this.redisService.getClient().get(key);
    return JSON.parse(result);
  }
}
