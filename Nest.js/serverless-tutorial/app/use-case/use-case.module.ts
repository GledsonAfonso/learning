import { Module } from '@nestjs/common';
import { RepositoryModule } from '~app/repository/repository.module';
import { CreateUser } from '~app/use-case/create-user.usecase';

@Module({
  imports: [
    RepositoryModule,
  ],
  providers: [
    CreateUser,
  ],
  exports: [
    CreateUser,
  ],
})
export class UseCaseModule {}
