import { Component, OnInit, Input, HostBinding } from '@angular/core';


@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent {

  @Input() label: string = '';

  @HostBinding('style.position')  @Input() position: string = 'fixed';
  constructor() {
    console.log(this.position)
  }
}
