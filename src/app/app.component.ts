import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstAngularApp';
  count: number = 0;
  url: string = 'https://images.pexels.com/photos/2089799/pexels-photo-2089799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  width: number = 500;
  height: number = 400;
  counter() {
    this.count++;
  }
  updateImg() {
    if (this.url.indexOf('2089799') != -1) {
      this.url = 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
    } else {
      this.url = 'https://images.pexels.com/photos/2089799/pexels-photo-2089799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
    }
  }
}
