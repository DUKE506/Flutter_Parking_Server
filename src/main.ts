import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CarRecord } from './car/dto/car-record.dto';



declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    bufferLogs:true,
  });

  const options = new DocumentBuilder()
  .setTitle('주차 관리 API')
  .setDescription('주차 관리 서버 API문서 입니다.')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, options,{extraModels:[CarRecord],});
  SwaggerModule.setup('api',app, document);

  await app.listen(process.env.PORT ?? 3000);

  if(module.hot){
    module.hot.accept();
    module.hot.dispose(()=>app.close());
  }
  console.log('NODE_ENV =>', process.env.NODE_ENV);
}
bootstrap();
