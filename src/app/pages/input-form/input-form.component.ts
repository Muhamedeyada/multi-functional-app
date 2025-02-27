// src/app/pages/input-form/input-form.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PredictionService } from '../../services/prediction.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf, ngFor, etc.
import { PredictionData } from '../../models/api-models';

@Component({
  selector: 'app-input-form',
  standalone: true, // Mark the component as standalone
  imports: [FormsModule, CommonModule], // Add FormsModule and CommonModule here
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent {
  predictionData: PredictionData = {
    Pregnancies: 0,
    Glucose: 0,
    BloodPressure: 0,
    SkinThickness: 0,
    Insulin: 0,
    BMI: 0,
    DiabetesPedigreeFunction: 0,
    Age: 0,
  };
  isLoading: boolean = false;
  errorMessage: string | null = null;

  constructor(
    private predictionService: PredictionService,
    private router: Router
  ) {}

  onSubmit() {
    this.isLoading = true;
    this.errorMessage = null;

    this.predictionService.getDiabetesPrediction(this.predictionData).subscribe(
      (response) => {
        this.isLoading = false;
        this.router.navigate(['/result'], {
          state: {
            type: 'prediction',
            original: JSON.stringify(this.predictionData), // So you can see the input data
            result: response, // Pass the entire response object
          },
        });
      },
      (error) => {
        this.isLoading = false;
        this.errorMessage = 'Failed to fetch prediction. Please try again.';
        console.error('Error:', error);
      }
    );
  }
  navigateHome() {
    this.router.navigate(['/']);
  }
}
