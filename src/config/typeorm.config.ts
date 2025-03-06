import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from 'path';



export const typeOrmConfig = async(
    configService :ConfigService
):Promise<TypeOrmModuleOptions> => {
    return {
        type:'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port:configService.get<number>('DATABASE_PORT'),
        username:  configService.get<string>('DATABASE_USERNAME'),
        password:  configService.get<string>('DATABASE_PASSWORD'),
        database:  configService.get<string>('DATABASE') ||'parkit',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: configService.get<boolean>('SYNCHRONIZE'),
        logging: ["query", "error", "schema", "warn", "info", "log"],
        logger:'advanced-console'
    }
}