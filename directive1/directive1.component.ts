import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive1',
  templateUrl: './directive1.component.html',
  styleUrls: ['./directive1.component.css']
})
export class Directive1Component implements OnInit {

  //Structural Directive
  showDataFlag: boolean = true; // If
  names:any= ['abc','xyz','mno','pqr','jkl']; //for
  num:number = 4; //switch
 
  //Attribute Directive
  myClass1:any ="test1";
  myClass2:any ="test2";
  myStyle:any = {'color': 'Red', 'background-color':'yellow'};
  constructor() { }

  ngOnInit(): void {
  }

}
