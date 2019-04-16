import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {

  @Input() objInput;
  constructor() { 
    // console.log(this.pholder);
   }
  
  ngOnInit() {
  }
  
}
