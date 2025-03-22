import { Injectable } from '@angular/core';
import { BlogPost, POSTS } from '../shared/mocks/posts.mock';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private allPosts: BlogPost[] = POSTS;

  // Retorna todos os posts
  getAllPosts(): BlogPost[] {
    return this.allPosts;
  }

  // Retorna apenas os primeiros 3 (featured)
  getFeaturedPosts(): BlogPost[] {
    return this.allPosts.slice(0, 3);
  }

  // Busca um post pelo ID
  getPostById(id: number): BlogPost | undefined {
    return this.allPosts.find((p) => p.id === id);
  }
}
