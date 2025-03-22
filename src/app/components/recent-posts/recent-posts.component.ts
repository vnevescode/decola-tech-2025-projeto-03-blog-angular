import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../shared/mocks/posts.mock';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-recent-posts',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.css'],
})
export class RecentPostsComponent implements OnInit {
  allPosts: BlogPost[] = [];

  postsPerPage = 9;
  currentPage = 1;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.allPosts = this.blogService.getAllPosts();
  }

  get totalPages(): number {
    return Math.ceil(this.allPosts.length / this.postsPerPage);
  }

  get paginatedPosts(): BlogPost[] {
    const startIndex = (this.currentPage - 1) * this.postsPerPage;
    const endIndex = startIndex + this.postsPerPage;
    return this.allPosts.slice(startIndex, endIndex);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
