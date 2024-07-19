import { AfterContentInit, AfterViewInit, Component } from '@angular/core';
import { BookDetails } from '../book';
import { CommonModule } from '@angular/common';
import { AddBookFormComponent } from '../../book-forms/add-book-form/add-book-form.component';
import { BookComponent } from '../book.component';
import { v4 as uuidv4 } from 'uuid';
import { EditBookFormComponent } from '../../book-forms/edit-book-form/edit-book-form.component';

@Component({
  selector: 'library-bookslist',
  standalone: true,
  imports: [CommonModule, AddBookFormComponent, EditBookFormComponent],
  templateUrl: './bookslist.component.html',
  styleUrl: './bookslist.component.scss',
})
export class BookslistComponent implements AfterContentInit {

  ngAfterContentInit(): void {
    this.selectedBookValue = {
      bookid: '',
      title: '',
      author: '',
      yearPublished: 0,
      genre: '',
    };
  }

  books: BookDetails[] = [
    {
      bookid: uuidv4(),
      title: 'The Alchemist ',
      author: 'Paulo Coelho',
      yearPublished: new Date('04-25-1993').getFullYear(),
      genre: 'Fantasy Novel',
    },
    {
      bookid: uuidv4(),
      title: 'The Richest Man in Babylon',
      author: 'George Samuel Clason',
      yearPublished: new Date('04-04-1926').getFullYear(),
      genre: 'Non-fiction/Personal Finance',
    },
    {
      bookid: uuidv4(),
      title: 'The Magic of Thinking Big',
      author: 'David J. Schwartz',
      yearPublished: new Date('04-02-1987').getFullYear(),
      genre: 'Self-help',
    },
    {
      bookid: uuidv4(),
      title: 'The Four Agreements: A Practical Guide to Personal Freedom',
      author: 'Don Miguel Ruiz',
      yearPublished: new Date('11-07-1997').getFullYear(),
      genre: 'Personal development, Spirituality, Self-help',
    },
  ];

  selectedBookValue!: BookDetails;

  addBook(book: BookComponent) {
    // console.log(book);
    let newBook: BookDetails = {
      bookid: uuidv4(),
      title: book.title,
      author: book.author,
      yearPublished: book.yearPublished,
      genre: book.genre,
    };

    this.books = [...this.books, newBook];
  }

  onDelete(currentBook: BookDetails) {
    this.selectedBookValue = currentBook;
  }

  onEdit(currentBook: BookDetails) {
    this.selectedBookValue = currentBook;
  }

  removeBook() {
    this.books = this.books.filter(
      (book) => book.bookid !== this.selectedBookValue.bookid
    );
  }
}
