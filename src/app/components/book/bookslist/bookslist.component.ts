import { AfterContentInit, Component, OnInit } from '@angular/core';
import { BookDetails } from '../book';
import { CommonModule } from '@angular/common';
import { AddBookFormComponent } from '../../book-forms/add-book-form/add-book-form.component';
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
    });
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

  addBook(book: BookDetails) {
    this.bookService.addBook(book).subscribe((data) => {
      console.log(data);

      this.books = data;
    });
  }

  onDelete(currentBook: BookDetails) {
    this.selectedBookValue = currentBook;
  }

  removeBook() {
    this.bookService
      .deleteBook(this.selectedBookValue.bookid)
      .subscribe((data) => {
        this.books = data;
      });
  }

  onEdit(currentBook: BookDetails) {
    this.selectedBookValue = currentBook;
  }

  updateBook() {
    this.bookService
      .updateBook(this.selectedBookValue.bookid, this.selectedBookValue)
      .subscribe((data) => {
        this.books = data;
      });
  }
}
