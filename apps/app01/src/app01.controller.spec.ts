import { Test, TestingModule } from '@nestjs/testing';
import { App01Controller } from './app01.controller';
import { App01Service } from './app01.service';

describe('App01Controller', () => {
  let app01Controller: App01Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [App01Controller],
      providers: [App01Service],
    }).compile();

    app01Controller = app.get<App01Controller>(App01Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(app01Controller.getHello()).toBe('Hello World!');
    });
  });
});
