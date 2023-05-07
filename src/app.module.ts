import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ContactModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';
import { PhoneModule } from './phone/phone.module';
import * as Joi from 'joi';
import { MongooseModule } from '@nestjs/mongoose';
import { enviroments } from './enviroments';
import config from './config';

@Module({
    imports: [
        ContactModule,
        HomeModule,
        PhoneModule,
        ConfigModule.forRoot({
            envFilePath: enviroments[process.env.NODE_ENV] || '.env',
            isGlobal: true,
            load: [config],
            validationSchema: Joi.object({
                APP_PORT: Joi.string().required(),
            }),
        }),
        MongooseModule.forRoot(
            `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/contact`,
        ),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
