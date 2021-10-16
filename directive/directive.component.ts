import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})

export class DirectiveComponent implements OnInit {

  //Structural Directive
    showDataFlag:boolean =  true;
    names:any = ['Deepali','Archana', 'Mayuri','Gauri'];
  number1: number = 2;


  //Attribute Directives
  myClass1:any = "test1";
  myClass2:any = "test2";
  myStyle:any = "{'color':'red', 'font-size':'45px', 'font-weight':'bold'}";

  constructor() { }

  ngOnInit(): void {
    if(this.showDataFlag == true){
      this.myClass1 = "test1";
    }
    else{
      this.myClass1 = "test2";
    }
  }

}
