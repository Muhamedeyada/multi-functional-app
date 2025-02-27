import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PredictionService } from '../../services/prediction.service';
import { LanguageService } from '../../services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-text-translator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './text-translator.component.html',
  styleUrls: ['./text-translator.component.css'],
})
export class TextTranslatorComponent {
  text: string = '';
  targetLanguage: string = 'es';
  isLoading: boolean = false;
  errorMessage: string | null = null;
  languages: any[] = [];
  selectedLanguage: { code: string; name: string } | null = null;
  isDropdownOpen = false;

  constructor(
    private predictionService: PredictionService,
    private languageService: LanguageService,
    private router: Router
  ) {
    this.languages = this.languageService.getLanguages();
  }

  selectLanguage(language: { code: string; name: string }) {
    this.selectedLanguage = language;
    this.targetLanguage = language.code;
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  onSubmit() {
    if (!this.text) return;

    this.isLoading = true;
    this.errorMessage = null;

    this.predictionService
      .translateText(this.text, this.targetLanguage)
      .subscribe(
        (response) => {
          this.isLoading = false;
          this.router.navigate(['/result'], {
            state: {
              result: response,
              type: 'translation',
              original: this.text,
              targetLanguage: this.targetLanguage,
            },
          });
        },
        (error) => {
          this.isLoading = false;
          this.errorMessage = 'Failed to translate text. Please try again.';
          console.error('Error:', error);
        }
      );
  }
}
