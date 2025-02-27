import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleSummarizerComponent } from '../../components/article-summarizer/article-summarizer.component';

@Component({
  selector: 'app-summarize-page',
  standalone: true,
  imports: [ArticleSummarizerComponent],
  templateUrl: './summarize-page.component.html',
  styleUrls: ['./summarize-page.component.css'],
})
export class SummarizePageComponent {
  constructor(private router: Router) {}

  navigateHome() {
    this.router.navigate(['/']);
  }
}
