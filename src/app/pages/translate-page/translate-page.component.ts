import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TextTranslatorComponent } from '../../components/text-translator/text-translator.component';
import { AudioTranslatorComponent } from '../../components/audio-translator/audio-translator.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-translate-page',
  standalone: true,
  imports: [TextTranslatorComponent, AudioTranslatorComponent, CommonModule],
  templateUrl: './translate-page.component.html',
  styleUrls: ['./translate-page.component.css'],
})
export class TranslatePageComponent {
  activeTab: 'text' | 'audio' = 'text';

  constructor(private router: Router) {}

  setActiveTab(tab: 'text' | 'audio') {
    this.activeTab = tab;
  }

  navigateHome() {
    this.router.navigate(['/']);
  }
}
