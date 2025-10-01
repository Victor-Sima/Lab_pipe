import {
  Controller,
  Get,
  Query,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UppercaseOutputInterceptor } from '../common/pipes/uppercase-output.pipe';
import { UppercasePipe } from '../common/pipes/uppercase.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.findAll();
  }

  @Get('uppercase')
  @UseInterceptors(UppercaseOutputInterceptor)
  getAllUsersUppercase() {
    return this.usersService.findAll();
  }

  @Get('search')
  searchUser(@Query('name', UppercasePipe) name: string) {
    return this.usersService.findByName(name);
  }

  @Get('search/uppercase')
  @UseInterceptors(UppercaseOutputInterceptor)
  searchUserUppercase(@Query('name', UppercasePipe) name: string) {
    return this.usersService.findByName(name);
  }
}
