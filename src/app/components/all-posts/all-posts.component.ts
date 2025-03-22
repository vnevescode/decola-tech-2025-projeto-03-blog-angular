import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { POSTS } from '../../mocks/posts.mock';

@Component({
  selector: 'app-all-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-posts.component.html',
  styleUrl: './all-posts.component.css',
})
export class AllPostsComponent {
  posts = POSTS;
}
