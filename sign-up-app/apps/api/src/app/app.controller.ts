import { 
  Controller, Get, Post, Body, 
  Param, HttpException, HttpStatus
} from '@nestjs/common';

import { User } from '@sign-up-app/api-interfaces';

import { AppService } from './app.service';

@Controller('users')
export class AppController {

  constructor(private readonly appService: AppService) {}

  @Get('')
  getAllUsers(): User[] {
    return this.appService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: number): User {
    return this.appService.getUser(id);
  }

  @Post('')
  postUser(@Body() user: User): number  {

    this.appService.getUsers().forEach(item => {
      if(item.email == user.email) {
        throw new HttpException('Not acceptable input: User already exists', HttpStatus.NOT_ACCEPTABLE);
      }
    })
    
    return this.appService.addUser(user);
  }

}
