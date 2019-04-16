import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
 title: string = 'fakebook';
 name: string = 'name'
 textInput = {
   type:"text",
   pholder:"name"
 }
 passInput = {
  type:"password",
  pholder:"password"
}
loginBtn = {
  class:"btn btn-info",
  btnName: "Login"
}
  constructor() { }

  ngOnInit() {
  }

}
