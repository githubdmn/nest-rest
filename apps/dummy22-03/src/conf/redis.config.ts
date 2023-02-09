import { env } from 'apps/dummy22-01/src/conf';

export const REDIS_CACHE_TTL = 86400; // 60 * 60 * 24;

export const REDIS_CONFIG = {
  host: env.redisport,
  port: env.redisport,
};

export const REDIS_CACHE_OPTIONS = {
  ...REDIS_CONFIG,

  ttl: REDIS_CACHE_TTL,
  max: 100,
  isGlobal: true,
};
