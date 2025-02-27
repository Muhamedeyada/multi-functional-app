import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PredictionService } from '../../services/prediction.service';
import { LanguageService } from '../../services/language.service';
import { FileUploadService } from '../../services/file-upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-audio-translator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './audio-translator.component.html',
  styleUrls: ['./audio-translator.component.css'],
})
export class AudioTranslatorComponent {
  selectedFile: File | null = null;
  targetLanguage: string = 'es';
  isLoading: boolean = false;
  errorMessage: string | null = null;
  languages: any[] = [];

  constructor(
    private predictionService: PredictionService,
    private languageService: LanguageService,
    private fileUploadService: FileUploadService,
    private router: Router
  ) {
    this.languages = this.languageService.getLanguages();
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const validation = this.fileUploadService.validateFile(file);
      if (validation.valid) {
        this.selectedFile = file;
        this.errorMessage = null;
      } else {
        this.errorMessage = validation.message ?? null;
        this.selectedFile = null;
      }
    }
  }

  getFileSize() {
    if (!this.selectedFile) return '';
    const fileSizeMB = this.fileUploadService.getFileSizeInMB(
      this.selectedFile
    );
    return fileSizeMB.toFixed(2) + ' MB';
  }

  onSubmit() {
    if (!this.selectedFile) return;

    this.isLoading = true;
    this.errorMessage = null;

    this.predictionService
      .translateAudio(this.selectedFile, this.targetLanguage)
      .subscribe(
        (response) => {
          this.isLoading = false;
          this.router.navigate(['/result'], {
            state: {
              result: response,
              type: 'audio-translation',
              fileName: this.selectedFile?.name,
              targetLanguage: this.targetLanguage,
            },
          });
        },
        (error) => {
          this.isLoading = false;
          this.errorMessage = 'Failed to translate audio. Please try again.';
          console.error('Error:', error);
        }
      );
  }
}
