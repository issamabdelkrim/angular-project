import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbre:any;
  show:boolean=false;
  title = 'app';
  articles = [ { titre: 'Le championnat du monde', contenu: 'Le champion du monde de cette année est ' , auteur: 'Med Taher' , date: '12/12/2005'},

  { titre: 'Les nouveaux parents ', contenu: 'Les nouveaux parents .... ' , auteur: 'Ahmed Said' , date: '11/11/2018'},
  { titre: 'Les nouveaux parentsssss ', contenu: 'Les nouveaux parentssss .... ' , auteur: 'Ahmed Said' , date: '11/11/2018'},
];
onchange(){

  this.show=true;
}
}
