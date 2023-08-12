import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegrafModule } from 'nestjs-telegraf';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: '5781980472:AAERsz0WhdySbOBXTixuLrdsx2LmhU1UeDw',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
