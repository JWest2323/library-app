import { Component } from '@angular/core';
import { BookslistComponent } from './bookslist/bookslist.component';
import { BookDetails } from './books';

@Component({
  selector: 'library-books',
  standalone: true,
  imports: [BookslistComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
})
export class BooksComponent {
  books: BookDetails[] = [
    {
      title: 'The Alchemist ',
      author: 'Paulo Coelho',
      yearPublished: new Date('04-25-1993').getFullYear(),
      genre: 'Fantasy Novel',
    },
    {
      title: 'The Richest Man in Babylon',
      author: 'George Samuel Clason',
      yearPublished: new Date('04-04-1926').getFullYear(),
      genre: 'Non-fiction/Personal Finance',
    },
    {
      title: 'The Magic of Thinking Big',
      author: 'David J. Schwartz',
      yearPublished: new Date('04-02-1987').getFullYear(),
      genre: 'Self-help',
    },
    {
      title: 'The Four Agreements: A Practical Guide to Personal Freedom',
      author: 'Don Miguel Ruiz',
      yearPublished: new Date('11-07-1997').getFullYear(),
      genre: 'Personal development, Spirituality, Self-help',
    },
  ];
}
