import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookDetails } from '../components/book/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = "http://localhost:3000/books";

  constructor(private http: HttpClient) { }

  getBooks(): Observable<BookDetails[]> {
    return this.http.get<BookDetails[]>(this.apiUrl);
  }

  addBook(book: BookDetails) : Observable<BookDetails> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<BookDetails>(this.apiUrl, book, { headers });
  }

  updateBook(bookid: string, book: BookDetails) : Observable<BookDetails> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.apiUrl}/${bookid}`;
    return this.http.put<BookDetails>(url, book, { headers });
  }

  deleteBook(bookid: string) : Observable<BookDetails> {
    const url = `${this.apiUrl}/${bookid}`;
    return this.http.delete<BookDetails>(url);
  }
}
