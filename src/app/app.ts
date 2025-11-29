import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    Header,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'maashreeaum-web';
}
