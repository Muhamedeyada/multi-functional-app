import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PredictionService } from '../../services/prediction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-text-improver',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './text-improver.component.html',
  styleUrls: ['./text-improver.component.css'],
})
export class TextImproverComponent {
  text: string = '';
  isLoading: boolean = false;
  errorMessage: string | null = null;

  constructor(
    private predictionService: PredictionService,
    private router: Router
  ) {}

  onSubmit() {
    if (!this.text) return;

    this.isLoading = true;
    this.errorMessage = null;

    this.predictionService.improveText(this.text).subscribe(
      (response) => {
        this.isLoading = false;
        this.router.navigate(['/result'], {
          state: {
            result: response,
            type: 'improved-text',
            original: this.text,
          },
        });
      },
      (error) => {
        this.isLoading = false;
        this.errorMessage = 'Failed to improve text. Please try again.';
        console.error('Error:', error);
      }
    );
  }
}
