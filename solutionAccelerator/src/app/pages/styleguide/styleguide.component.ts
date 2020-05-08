import { Component, OnInit } from '@angular/core';
import { AppSettings } from '@app/config/settings/app.settings';

@Component({
  selector: 'app-styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.scss']
})
export class StyleguideComponent implements OnInit {
  public title: string;
  constructor(
    private appSettings: AppSettings
  ) {
    this.title = this.appSettings.settings.name;
  }

  ngOnInit(): void {
  }

}
