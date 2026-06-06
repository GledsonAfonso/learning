import { EntityManager, MikroORM } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { User } from '~app/entity/user.entity';

@Injectable()
export class UserRepository {
  private em: EntityManager;

  constructor(
    private readonly orm: MikroORM,
  ) {
    this.em = this.orm.em.fork();
  }

  async findAll(): Promise<User[]> {
    return await this.em.findAll(User);
  }

  async find(id: string): Promise<User | null> {
    return await this.em.findOne(User, { id });
  }

  async save(click: User): Promise<User> {
    return await this.em.upsert(click);
  }
}
