import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CardsModule } from './modules/cards/cards.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.MONGODB_URI || 'http://localhost:27017/marin',
      {
        auth: {
          username: process.env.MONGODB_USERNAME,
          password: process.env.MONGODB_PASSWORD,
        },
        authSource: 'admin',
      },
    ),
    CardsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
