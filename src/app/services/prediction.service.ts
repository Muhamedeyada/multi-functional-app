import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import {
  ArticleSummaryRequest,
  FitnessPlanRequest,
  PredictionData,
  TextImproveRequest,
  TranslationRequest,
} from '../models/api-models';

@Injectable({
  providedIn: 'root',
})
export class PredictionService {
  private baseUrl = 'http://37.27.22.190:5522/api/v1';

  constructor(private http: HttpClient) {}

  // Method to get diabetes prediction
  getDiabetesPrediction(data: PredictionData): Observable<any> {
    console.log('Request:', data);
    return this.http.post(`${this.baseUrl}/diabete`, data).pipe(
      tap((response) => console.log('Response:', response)),
      catchError(this.handleError)
    );
  }

  // Method to improve text
  improveText(text: string): Observable<any> {
    const data: TextImproveRequest = { text };
    console.log('Request:', data);
    return this.http.post(`${this.baseUrl}/improve-text`, data).pipe(
      tap((response) => console.log('Response:', response)),
      catchError(this.handleError)
    );
  }

  // Method to summarize an article
  summarizeArticle(article: string): Observable<any> {
    const data: ArticleSummaryRequest = { article };
    console.log('Request:', data);
    return this.http.post(`${this.baseUrl}/article`, data).pipe(
      tap((response) => console.log('Response:', response)),
      catchError(this.handleError)
    );
  }

  // Method to get a fitness plan
  getFitnessPlan(data: FitnessPlanRequest): Observable<any> {
    console.log('Request:', data);
    return this.http.post(`${this.baseUrl}/fitness-plan`, data).pipe(
      tap((response) => console.log('Response:', response)),
      catchError(this.handleError)
    );
  }

  // Method to translate text
  translateText(text: string, targetLanguage: string): Observable<any> {
    const data: TranslationRequest = { text, targetLanguage };
    console.log('Request:', data);
    return this.http.post(`${this.baseUrl}/translate`, data).pipe(
      tap((response) => console.log('Response:', response)),
      catchError(this.handleError)
    );
  }

  // Method to translate audio
  translateAudio(file: File, targetLanguage: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('targetLanguage', targetLanguage);
    console.log('Request: Sending audio file');
    return this.http.post(`${this.baseUrl}/translate-audio`, formData).pipe(
      tap((response) => console.log('Response:', response)),
      catchError(this.handleError)
    );
  }

  // Handle API errors
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error('API Error:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
