import { Component, OnInit } from '@angular/core';
import { flowTransitions } from '@app/utils/app.animation';


@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss'],
  animations: [
    flowTransitions.showNavButton, flowTransitions.EnterLeave
  ]
})
export class FlowComponent implements OnInit {
  viewIndex: number = 1;
  constructor() { }

  ngOnInit(): void {
  }
  changeSlide(indx: any): void {
    if (this.viewIndex === 0) {
      this.viewIndex = 1;
    } else if (indx === 0) {
      this.viewIndex = this.viewIndex - 1;
    }
    else {
      this.viewIndex = indx;
    }
  }

}
