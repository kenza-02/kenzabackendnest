import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassesModule } from './classes/classes.module';
import { InscriptionsModule } from './inscriptions/inscriptions.module';


@Module({
    imports: [MongooseModule.forRoot('mongodb://localhost/mballo_school_db'),
    ClassesModule,
    InscriptionsModule 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
