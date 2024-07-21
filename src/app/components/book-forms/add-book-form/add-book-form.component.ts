import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookDetails } from '../../book/book';

@Component({
  selector: 'library-add-book-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-book-form.component.html',
  styleUrl: './add-book-form.component.scss',
})
export class AddBookFormComponent {
  id: string = '';

  title: string = '';

  author: string = '';

  yearPublished!: number;

  genre: string = '';

  newBook: BookDetails = {
    bookid: '',
    title: '',
    author: '',
    yearPublished: new Date().getFullYear(),
    genre: '',
  };

  @Output() submittedBook = new EventEmitter<BookDetails>();

  submitted: boolean = false;

  clearBookForm() {
    this.newBook = {
      bookid: '',
      title: '',
      author: '',
      yearPublished: new Date().getFullYear(),
      genre: '',
    };
  }

  onSubmit() {
    this.submittedBook.emit(this.newBook);
    this.submitted = true;
    this.clearBookForm();
  }
}
