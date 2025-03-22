import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BlogPost } from '../../shared/mocks/posts.mock';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css',
})
export class BlogDetailComponent implements OnInit {
  faArrowLeft = faArrowLeft;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private blogService = inject(BlogService);

  post: BlogPost | undefined;

  ngOnInit() {
    const idStr = this.route.snapshot.paramMap.get('id');
    const id = Number(idStr);
    this.post = this.blogService.getPostById(id);
    if (!this.post) {
      this.router.navigate(['/']);
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
