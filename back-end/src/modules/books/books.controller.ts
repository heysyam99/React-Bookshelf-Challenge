import { Controller, Get, HttpStatus, Param, Query, Res } from '@nestjs/common';
import { BooksService } from './books.service';
import { Response } from 'express';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll(@Res() response: Response, @Query() query) {
    const books = this.booksService.findAll(query);

    return response.status(HttpStatus.OK).json(books);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }
}
