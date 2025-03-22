import { Routes } from '@angular/router';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { FeaturedPostsComponent } from './components/featured-posts/featured-posts.component';
import { RecentPostsComponent } from './components/recent-posts/recent-posts.component';

export const routes: Routes = [
  { path: '', component: BlogListComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
];
