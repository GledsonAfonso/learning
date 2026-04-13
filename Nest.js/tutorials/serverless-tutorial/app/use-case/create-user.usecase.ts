import { Injectable } from '@nestjs/common';
import { User } from '~app/entity/user.entity';
import { UserRepository } from '~app/repository/user.repository';

interface CreateUserInput {
  name: string;
}

@Injectable()
export class CreateUser {
  constructor(
    private readonly repository: UserRepository,
  ) {}

  async execute(input: CreateUserInput): Promise<User> {
    const user = new User(input);
    const result = await this.repository.save(user);
    return result;
  }
}
