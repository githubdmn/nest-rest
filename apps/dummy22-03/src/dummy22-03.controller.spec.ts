import { Test, TestingModule } from '@nestjs/testing';
import { Dummy2203Controller } from './dummy22-03.controller';
import { Dummy2203Service } from './dummy22-03.service';

describe('Dummy2203Controller', () => {
  let dummy2203Controller: Dummy2203Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Dummy2203Controller],
      providers: [Dummy2203Service],
    }).compile();

    dummy2203Controller = app.get<Dummy2203Controller>(Dummy2203Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(dummy2203Controller.getHello()).toBe('Hello World!');
    });
  });
});
