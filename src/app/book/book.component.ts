import { Component, Inject } from '@angular/core';
import { BookslistComponent } from './bookslist/bookslist.component';

@Component({
  selector: 'library-books',
  standalone: true,
  imports: [BookslistComponent],
  providers: [
    {provide: String, useValue: "stringValue"},
    {provide: Number, useValue: 0}
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  public id!: string;
  public title!: string;
  public author!: string;
  public yearPublished!: number;
  public genre!: string;

  constructor(
   @Inject(String) _id: string,
   @Inject(String) _title: string,
   @Inject(String) _author: string,
   @Inject(Number) _yearPublished: number,
   @Inject(String) _genre: string,
   
  ) {
    this.id = _id;
    this.title = _title;
    this.author = _author;
    this.yearPublished = _yearPublished;
    this.genre = _genre;
  }
}
