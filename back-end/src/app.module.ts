import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksService } from './modules/books/books.service';
import { BooksModule } from './modules/books/books.module';

@Module({
  imports: [BooksModule],
  controllers: [AppController],
  providers: [AppService, BooksService],
})
export class AppModule {}
