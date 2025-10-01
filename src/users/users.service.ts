import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Victor' },
    { id: 2, name: 'Maria' },
    { id: 3, name: 'Ion' },
  ];

  findAll() {
    return this.users;
  }

  findByName(name: string) {
    return this.users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase()),
    );
  }
}
