import { Test, TestingModule } from '@nestjs/testing';
import { Dummy2201Controller } from './dummy22-01.controller';
import { Dummy2201Service } from './dummy22-01.service';

describe('Dummy2201Controller', () => {
  let dummy2201Controller: Dummy2201Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Dummy2201Controller],
      providers: [Dummy2201Service],
    }).compile();

    dummy2201Controller = app.get<Dummy2201Controller>(Dummy2201Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(dummy2201Controller.getHello()).toBe('Hello World!');
    });
  });
});
