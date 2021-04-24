import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static'; // For serving static files with server; serving frontend prod build
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
