import { Component } from '@angular/core';
import { FeatureSelectorComponent } from '../../components/feature-selector/feature-selector.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeatureSelectorComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
