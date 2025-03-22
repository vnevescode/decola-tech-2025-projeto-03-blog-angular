import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../shared/mocks/posts.mock';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-featured-posts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './featured-posts.component.html',
  styleUrls: ['./featured-posts.component.css'],
})
export class FeaturedPostsComponent implements OnInit {
  posts: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    // Carrega apenas 3 posts
    this.posts = this.blogService.getFeaturedPosts();
  }
}
