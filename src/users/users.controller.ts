import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import { UsersService } from './users.service';
import { UppercasePipe } from '../uppercase/uppercase.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.findAll();
  }

  @Get('search')
  @UsePipes(UppercasePipe) // aplicăm pipe pe query
  searchUser(@Query('name') name: string) {
    return this.usersService.findByName(name);
  }
}
