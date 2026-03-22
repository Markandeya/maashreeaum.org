import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-books-preview',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './books-preview.html',
    styleUrl: './books-preview.scss',
})
export class BooksPreview { }
