import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { CarController } from './car/car.controller';
import { CarService } from './car/car.service';
import { CarModule } from './car/car.module';
import { LoggerModule } from './logger/logger.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import path from 'path';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports : [
    ConfigModule.forRoot({
      //전역으로 설정할것인지?
      isGlobal:true,
      envFilePath:`.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject : [ConfigService],
      useFactory : typeOrmConfig,

    }),
    UserModule, CarModule, LoggerModule,
  ],
  controllers: [AppController, UserController, CarController],
  providers: [AppService, CarService],
})
export class AppModule {}
