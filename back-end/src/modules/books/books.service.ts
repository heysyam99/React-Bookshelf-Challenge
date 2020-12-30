import { Injectable } from '@nestjs/common';
import * as Booklist from '../../../data/Booklist.json';

@Injectable()
export class BooksService {
  findAll(query) {
    const totalBooks = Booklist.length;

    if (query) {
      const { take, page, search } = query;
      const from = (page - 1) * take;
      const to = take - 1 + from;

      if (search) {
        const data = lookup(search, Booklist);

        return { items: data.slice(from, to + 1), length: data.length };
      }

      return { items: Booklist.slice(from, to + 1), length: totalBooks };
    }

    return {
      data: Booklist,
      length: totalBooks,
    };
  }

  findOne(id: number) {
    return;
  }
}

function lookup(string, array) {
  const matches = [];
  const regexp = new RegExp(string, 'g');

  for (let i = 0; i < array.length; i++) {
    for (const key in array[i]) {
      if (('' + array[i][key]).match(regexp)) matches.push(array[i]);
    }
  }

  return matches;
}
