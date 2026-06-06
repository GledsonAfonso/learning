import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from '~app/common/entity/base-entity';

@Entity({ tableName: 'users' })
export class User extends BaseEntity {
  @Property()
  name: string;

  constructor(attrs: {
    name: string;
  }) {
    super();

    this.name = attrs.name;
  }
}
