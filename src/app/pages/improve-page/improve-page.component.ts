import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TextImproverComponent } from '../../components/text-improver/text-improver.component';

@Component({
  selector: 'app-improve-page',
  standalone: true,
  imports: [TextImproverComponent],
  templateUrl: './improve-page.component.html',
  styleUrls: ['./improve-page.component.css'],
})
export class ImprovePageComponent {
  constructor(private router: Router) {}

  navigateHome() {
    this.router.navigate(['/']);
  }
}
