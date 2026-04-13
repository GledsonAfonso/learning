import { Migration } from '@mikro-orm/migrations';

export class Migration20240819035033 extends Migration {

  override async up(): Promise<void> {
    this.addSql('create table "users" ("id" varchar(255) not null, "created_at" timestamptz not null, "updated_at" timestamptz null, "name" varchar(255) not null, constraint "users_pkey" primary key ("id"));');
  }

  override async down(): Promise<void> {
    this.addSql('drop table if exists "users" cascade;');
  }

}
