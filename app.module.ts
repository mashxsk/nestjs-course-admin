import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Course } from './course.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'courses.db',
      entities: [Course],
      synchronize: true, 
    }),
    TypeOrmModule.forFeature([Course]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}