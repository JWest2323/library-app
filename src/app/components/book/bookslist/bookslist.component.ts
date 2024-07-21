import { AfterContentInit, Component, OnInit } from '@angular/core';
import { BookDetails } from '../book';
import { CommonModule } from '@angular/common';
import { AddBookFormComponent } from '../../book-forms/add-book-form/add-book-form.component';
import { BookComponent } from '../book.component';
import { v4 as uuidv4 } from 'uuid';
import { EditBookFormComponent } from '../../book-forms/edit-book-form/edit-book-form.component';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'library-bookslist',
  standalone: true,
  imports: [CommonModule, AddBookFormComponent, EditBookFormComponent],
  templateUrl: './bookslist.component.html',
  styleUrl: './bookslist.component.scss',
})
export class BookslistComponent implements OnInit, AfterContentInit {
  
  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    })
  }

  ngAfterContentInit(): void {
    this.selectedBookValue = {
      bookid: '',
      title: '',
      author: '',
      yearPublished: 0,
      genre: '',
    };
  }

  constructor(private bookService: BookService) {}
 
  books: BookDetails[] = [];

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
