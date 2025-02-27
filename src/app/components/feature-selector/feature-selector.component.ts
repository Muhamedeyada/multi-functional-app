import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-selector.component.html',
  styleUrls: ['./feature-selector.component.css'],
})
export class FeatureSelectorComponent {
  features = [
    {
      name: 'Text Translation',
      description: 'Translate your text into different languages.',
      route: '/translate',
    },
    {
      name: 'Audio Translation',
      description: 'Upload audio files and get translated text.',
      route: '/translate-audio',
    },
    {
      name: 'Text Improvement',
      description: 'Enhance your writing with AI assistance.',
      route: '/improve',
    },
    {
      name: 'Article Summarization',
      description: 'Get a concise summary of any article.',
      route: '/summarize',
    },
    {
      name: 'Diabetes Prediction',
      description: 'Check your diabetes risk using medical metrics.',
      route: '/diabetes',
    },
  ];

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
