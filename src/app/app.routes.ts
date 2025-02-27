import { Routes } from '@angular/router';
import { InputFormComponent } from './pages/input-form/input-form.component';
import { ResultComponent } from './pages/result/result.component';
import { ImprovePageComponent } from './pages/improve-page/improve-page.component';
import { SummarizePageComponent } from './pages/summarize-page/summarize-page.component';
import { TranslatePageComponent } from './pages/translate-page/translate-page.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Home page with feature selection
  { path: 'diabetes', component: InputFormComponent }, // Diabetes prediction
  { path: 'result', component: ResultComponent }, // Show prediction result
  { path: 'improve', component: ImprovePageComponent }, // Improve text
  { path: 'summarize', component: SummarizePageComponent }, // Summarize article
  { path: 'translate', component: TranslatePageComponent }, // Translate text
  { path: 'translate-audio', component: TranslatePageComponent }, // Translate audio (use the same page for now)
  { path: '**', redirectTo: '' }, // Redirect unknown routes to Home
];
