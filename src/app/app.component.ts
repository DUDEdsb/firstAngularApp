import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstAngularApp';
  count:number = 0;
  url:string = '';
  counter(){
    this.count++;
  }
  updateImg(){
    this.url='';
  }
}
