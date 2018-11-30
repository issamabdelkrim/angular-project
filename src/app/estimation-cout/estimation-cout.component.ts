import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estimation-cout',
  templateUrl: './estimation-cout.component.html',
  styleUrls: ['./estimation-cout.component.css']
})
export class EstimationCoutComponent implements OnInit {
private position:any="";
private nombre:any="";
private cout:any;
  constructor() { }

  ngOnInit() {
  }
  calculeCout(){

console.log(this.nombre)
if(this.position ==="haut" ){
  if(this.nombre<=30)
  this.cout=10;
  else 
  this.cout=20
}else {
  if(this.nombre<=30)
  this.cout=5;
  else 
  this.cout=15
}

}
}
