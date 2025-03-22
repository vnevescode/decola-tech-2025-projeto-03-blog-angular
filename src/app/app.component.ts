import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsLetterSectionComponent } from './components/news-letter-section/news-letter-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    BlogListComponent,
    AllPostsComponent,
    PaginationComponent,
    FooterComponent,
    NewsLetterSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blog-page-project';
}
