import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-third',
  template: `<div>Third Component</div>`,
  styleUrls: ['./third.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ThirdComponent {
  constructor() { }
}
