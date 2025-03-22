import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogPost } from '../../shared/mocks/posts.mock';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css',
})
export class BlogListComponent implements OnInit {
  // Array completo de posts
  allPosts: BlogPost[] = [];

  // “Featured” (recents) → 3 posts
  featuredPosts: BlogPost[] = [];

  // Paginação do “All”
  postsPerPage = 6;
  currentPage = 1;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    // Carrega do serviço ou mock
    this.allPosts = this.blogService.getAllPosts(); // ou um array fixo
    this.featuredPosts = this.allPosts.slice(0, 3);
  }

  // Cálculo de paginação
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
