import { Component, OnInit } from '@angular/core';
import { SlideInTranstion } from '@app/utils/app.animation';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss'],
  animations: [
    SlideInTranstion
  ]
})
export class PlaceholderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
