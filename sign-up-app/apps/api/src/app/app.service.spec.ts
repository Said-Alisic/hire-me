import { Test } from '@nestjs/testing';
import { User } from '@sign-up-app/api-interfaces';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;
  let user: User;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
    user = {   
      firstName: 'New', 
      lastName: 'User', 
      email: 'newuser@shieldapp.ai',            
    }
  });

  describe('Should return "Array of 5 User objects', () => {
    it('should return "Welcome to Shield Sign-Up!"', () => {
      expect(service.getUsers()).toEqual(
        expect.arrayContaining([      
          expect.objectContaining(user)
        ])
      );
    });
  });

  describe('getUser', () => {
    it('Should return "User object"', () => {
      expect(service.getUser(0)).toEqual(user);
    });
  });

  describe('postUser', () => {
    it('Should return "Length of array as 6"', () => {
      expect(service.addUser({   
        firstName: 'Another', 
        lastName: 'User', 
        email: 'another@shield.ai',          
      })).toEqual(6);
    });
  });
});
