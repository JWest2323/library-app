import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookComponent } from './components/book/book.component';

@Component({
  selector: 'library-root',
  standalone: true,
  imports: [RouterOutlet, BookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'library-app';
}
