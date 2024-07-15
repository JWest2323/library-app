import { Component, Input } from '@angular/core';
import { BookDetails } from '../books';
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
}
