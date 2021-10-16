import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  
  constructor() { }
  name1:string = "Hello World!!!";
  name2:any = "Data Binding";

  link:any = "http://www.google.com";

  imagepath:any = "assets/Background-Flower.png";

  myBoolean:boolean = true;
  
  myImagepath:any;

  // 3. Event Binding
  showData(){
    console.log("First event fired!!!");
  }

  // 4. Two way Data Binding
  age:number = 28;
  defaultname:string = "Deepali";

  ngOnInit(): void {
    if(this.myBoolean){
      this.myImagepath = "assets/carousel1.jpg";
  }
  
  }

  

}
