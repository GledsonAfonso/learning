import { MikroOrmModule, MikroOrmModuleOptions } from '@mikro-orm/nestjs';
import { DynamicModule, Module } from '@nestjs/common';
import { buildDatabaseConfig } from '~app/common/database/mikro-orm.config';

@Module({})
export class DatabaseModule {
  static register(): DynamicModule {
    const mikroORM = MikroOrmModule.forRootAsync({
      useFactory: () => {
        return {
          ...(buildDatabaseConfig() as MikroOrmModuleOptions),
          autoLoadEntities: true,
        };
      },
    });

    return {
      module: DatabaseModule,
      imports: [mikroORM],
      providers: [],
      exports: [mikroORM],
    };
  }
}
