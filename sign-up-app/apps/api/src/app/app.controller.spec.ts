import { Test, TestingModule } from '@nestjs/testing';
import { User } from '@sign-up-app/api-interfaces';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;
  let user: User;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    user = {   
      firstName: 'New', 
      lastName: 'User', 
      email: 'newuser@shieldapp.ai',            
    }

  });

  describe('getUsers', () => {
    it('Should return "Array of 5 User objects"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getAllUsers()).toEqual(
        expect.arrayContaining([      
          expect.objectContaining(user)
        ])
      )
    });
  });

  describe('getUser', () => {
    it('Should return "User object"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getUser(0)).toEqual(user);
    });
  });

  describe('postUser', () => {
    it('Should return "Length of array as 6"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.postUser({   
        firstName: 'Another', 
        lastName: 'User', 
        email: 'another@shield.ai',          
      })).toEqual(6);
    });
  });

});
