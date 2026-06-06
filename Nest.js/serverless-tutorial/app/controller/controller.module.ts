import { Module } from "@nestjs/common";
import { UserController } from "~app/controller/user.controller";
import { RepositoryModule } from "~app/repository/repository.module";

@Module({
  imports: [RepositoryModule],
  controllers: [UserController],
  exports: [],
})
export class ControllerModule {}