import { AfterViewInit, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookDetails } from '../../book/book';

@Component({
  selector: 'library-edit-book-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-book-form.component.html',
  styleUrl: './edit-book-form.component.scss',
})
export class EditBookFormComponent {
  @Input() currentBook!: BookDetails;
}
