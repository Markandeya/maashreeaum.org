import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-books-overview',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './books-overview.html',
    styleUrl: './books-overview.scss',
})
export class BooksOverviewComponent { }
