import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
