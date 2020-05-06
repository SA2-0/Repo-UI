import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { ErrorTransition } from '@app/utils/app.animation';

@Component({
    selector: 'app-error',
    template: `<span class="error-block"><ng-content></ng-content></span>`,
    styleUrls: ['./error.component.scss'],
    animations: [
        ErrorTransition
    ],
    host: {
        '[@ErrorTransition]': ''
    }
})
export class ErrorComponent implements OnInit {

    constructor() { }

    ngOnInit(): void { }
}
