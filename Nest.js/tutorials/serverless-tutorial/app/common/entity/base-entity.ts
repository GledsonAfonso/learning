import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { randomUUID } from 'crypto';

@Entity({ abstract: true })
export abstract class BaseEntity {
  @PrimaryKey({ type: 'string' })
  id = randomUUID().toString();

  @Property({ onCreate: () => new Date() })
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date(), nullable: true })
  updatedAt: Date = new Date();
}
