import { Component, EventEmitter, Output } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'library-book-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss'
})
export class BookFormComponent {

  id: string = "";

  title: string = "";

  author: string = "";

  yearPublished!: number;

  genre: string = "";

  newBook = new BookComponent(this.id, this.title, this.author, this.yearPublished, this.genre);
  // model = new BookComponent('0');

  @Output() submittedBook = new EventEmitter<BookComponent>;

  submitted: boolean = false;

  clearBookForm() {
    this.newBook = new BookComponent(this.id, this.title, this.author, this.yearPublished, this.genre);
  }

  onSubmit() {
    this.submittedBook.emit(this.newBook);
    this.submitted = true;
    this.clearBookForm();
  }
}
