import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserParams } from "~app/controller/schema/user-params.schema";
import { User } from "~app/entity/user.entity";
import { UserRepository } from "~app/repository/user.repository";

@Controller('user')
export class UserController {
  constructor(
    private readonly repository: UserRepository,
  ) {}

  @Post()
  createUser(@Body() params: UserParams): Promise<User> {
    return this.repository.save(new User(params));
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.repository.findAll();
  }
}