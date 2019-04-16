import { Component, OnInit } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-rightside',
  templateUrl: './rightside.component.html',
  styleUrls: ['./rightside.component.css']
})
export class RightsideComponent implements OnInit {

  firstName = {
    type: "text",
    pholder: "FirstName"
  }
  lastName = {
    type: "text",
    pholder: "SecondName"
  }

  mobileNumber = {
    type:"number",
    pholder: "mobile number"
  }

  passInput = {
    type : "password",
    pholder: "Password"
  }

  btnSignUp = {
    class:"btn btn-success",
    btnName: "SignUp"
  }
  constructor() { }

  ngOnInit() {
  }

}
