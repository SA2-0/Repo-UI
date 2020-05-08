import { Component } from '@angular/core';
import { BreadcrumbService } from './core/services/breadcrumb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.init();
  }
}
