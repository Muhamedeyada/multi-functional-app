import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent {
  resultType: string = '';
  originalContent: string = '';
  fileName: string = '';
  result: any = {};

  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const state = window.history.state;

      if (state && state.type) {
        this.resultType = state.type;
        this.originalContent = state.original || '';
        this.fileName = state.fileName || '';
        this.result = state.result;

        // Debug to see what's actually in the result
        console.log('Result in component:', this.result);
      } else {
        // Handle case when there's no state
        this.router.navigate(['/']);
      }
    });
  }

  getResultTitle(): string {
    const titles: { [key: string]: string } = {
      translation: 'Translation Result',
      'audio-translation': 'Audio Translation Result',
      'improved-text': 'Text Improvement Result',
      'article-summary': 'Article Summary Result',
      prediction: 'Diabetes Prediction Result',
    };
    return titles[this.resultType] || 'Result';
  }

  getPredictionMessage(): string {
    if (
      !this.result ||
      !this.result.data ||
      this.result.data.result === undefined
    ) {
      return 'No prediction available';
    }

    const probability = this.result.data.result;
    if (probability >= 0.5) {
      return `High diabetes risk (${(probability * 100).toFixed(2)}%)`;
    } else {
      return `Low diabetes risk (${(probability * 100).toFixed(2)}%)`;
    }
  }

  getPredictionColorClass(): string {
    if (!this.result || !this.result.data) {
      return 'bg-gray-500 text-white'; // Default color when no data
    }

    return this.result.data.result >= 0.5
      ? 'bg-red-500 text-white'
      : 'bg-green-500 text-white';
  }
  getLanguageName(): string {
    return this.result?.targetLanguage || 'Unknown';
  }

  goBack() {
    this.router.navigate(['/']);
  }

  navigateHome() {
    this.router.navigate(['/']);
  }
}
