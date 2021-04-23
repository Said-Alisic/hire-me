import { 
  Controller, Get, Post, Put, Delete, 
  Body, Param, HttpException, HttpStatus
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

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() user: User): User {

    this.appService.updateUser(id, user);
    
    return user
  }

  // Email is used as ID due to pagination handling on client side
  @Delete(':email')
  deleteUser(@Param('email') email: string): User {

    const deletedUser: User = this.appService.deleteUser(email);

    return deletedUser
  }
}
