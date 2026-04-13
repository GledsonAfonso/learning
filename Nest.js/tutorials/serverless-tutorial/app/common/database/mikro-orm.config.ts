import { Migrator } from '@mikro-orm/migrations';
import { defineConfig } from '@mikro-orm/postgresql';
import { SeedManager } from '@mikro-orm/seeder';
import { config } from 'dotenv';
import configs from '~app/common/config/configs';

config({ path: ['.env', '.env.local'] });

export function buildDatabaseConfig() {
  const config = configs();

  return defineConfig({
    entities: ['./build/**/*.entity.js'],
    entitiesTs: ['./app/**/*.entity.ts'],
    clientUrl: config.databaseUrl,
    debug: true,
    driverOptions: {
      connection: {
        ssl: false,
      },
    },
    migrations: {
      tableName: 'db_migrations',
      path: './migrations',
      transactional: true,
      allOrNothing: true,
    },
    extensions: [Migrator, SeedManager],
  });
}

export default buildDatabaseConfig();
