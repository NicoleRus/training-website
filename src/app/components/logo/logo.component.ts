import { Component, Host, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  templateUrl: '../../../assets/logo.svg',
  styles: [
    `:host {display: block}`
  ]
})
export class LogoComponent {
  @Input() width: string | number = 60;

  @HostBinding('style.width')
  get hostWidth() {
    return this.width + 'px';
  }

  @HostBinding('style.height')
  get hostHeight() {
    return 'auto';
  }
}
