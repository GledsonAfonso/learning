import { Module } from '@nestjs/common';
import { CommonModule } from '~app/common/common.module';
import { UserRepository } from '~app/repository/user.repository';

@Module({
  imports: [
    CommonModule,
  ],
  providers: [
    UserRepository,
  ],
  exports: [
    UserRepository,
  ],
})
export class RepositoryModule {}
