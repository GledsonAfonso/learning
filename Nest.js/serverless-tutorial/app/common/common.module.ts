import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '~app/common/database/database.module';

@Module({
  imports: [
    DatabaseModule.register(),
    HttpModule,
  ],
  providers: [],
  exports: [
    DatabaseModule,
  ],
})
export class CommonModule {}
