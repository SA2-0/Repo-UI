import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('showNavButton', [
      // ...
      state('open', style({
        opacity: 1,
        visibility: 'visible'
      })),
      state('closed', style({
        opacity: 0,
        visibility: 'hidden'
      })),
      transition('open => closed', [
        animate('.25s')
      ]),
      transition('closed => open', [
        animate('.25s')
      ]),
    ]),
    trigger('EnterLeave', [
      state('flyIn', style(
        {
          transform: 'translate3d(0, 0, 0)',
          opacity: 1,
          visibility: 'visible'
        }
      )),
      transition(':enter', [
        style(
          {
            transform: 'translate3d(-10%, 0, 0)',
            opacity: 0,
            visibility: 'hidden'
          }
        ),
        animate('0.5s 300ms ease')
      ]),
      transition(':leave', [
        animate('0.3s ease', style(
          {
            transform: 'translate3d(10%, 0, 0)',
            opacity: 0,
            visibility: 'hidden'
          }
        ))
      ])
    ])
  ],
})
export class FlowComponent implements OnInit {
  viewIndex: number = 1;
  constructor() { }

  ngOnInit(): void {
  }
  changeSlide(indx): void {
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
