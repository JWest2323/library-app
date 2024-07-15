import { Component, Input } from '@angular/core';
import { BookDetails } from '../book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'library-bookslist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bookslist.component.html',
  styleUrl: './bookslist.component.scss',
})
export class BookslistComponent {
  @Input() books: BookDetails[] = [];

  removeBook(currentBook: BookDetails) {
    this.books = this.books.filter((book) => book.bookid != currentBook.bookid);
  }
}
