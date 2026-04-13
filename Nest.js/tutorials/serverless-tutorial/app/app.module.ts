import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from '~app/common/common.module';
import configs from '~app/common/config/configs';
import { ControllerModule } from '~app/controller/controller.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.local'],
      load: [configs],
      isGlobal: true,
    }),
    CommonModule,
    ControllerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
