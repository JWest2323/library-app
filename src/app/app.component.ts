import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BooksComponent } from './books/books.component';

@Component({
  selector: 'library-root',
  standalone: true,
  imports: [RouterOutlet, BooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'library-app';
}
