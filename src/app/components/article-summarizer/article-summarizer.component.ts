import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PredictionService } from '../../services/prediction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-summarizer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './article-summarizer.component.html',
  styleUrls: ['./article-summarizer.component.css'],
})
export class ArticleSummarizerComponent {
  article: string = '';
  isLoading: boolean = false;
  errorMessage: string | null = null;

  constructor(
    private predictionService: PredictionService,
    private router: Router
  ) {}

  onSubmit() {
    if (!this.article) return;

    this.isLoading = true;
    this.errorMessage = null;

    this.predictionService.summarizeArticle(this.article).subscribe(
      (response) => {
        this.isLoading = false;
        this.router.navigate(['/result'], {
          state: {
            result: response,
            type: 'article-summary',
            original: this.article,
          },
        });
      },
      (error) => {
        this.isLoading = false;
        this.errorMessage = 'Failed to summarize article. Please try again.';
        console.error('Error:', error);
      }
    );
  }
}
