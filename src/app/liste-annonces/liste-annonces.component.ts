import { AnnoncesServices } from './../services/annoces.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-annonces',
  templateUrl: './liste-annonces.component.html',
  styleUrls: ['./liste-annonces.component.css'],
  providers:[AnnoncesServices]
})
export class ListeAnnoncesComponent implements OnInit {
annonces:any=[];
  constructor(private annonceService: AnnoncesServices) { }

  ngOnInit() {
    console.log("annonces")
    this.annonceService.getAllAnnonces().subscribe((data)=>{
      console.log(data)
      this.annonces=data;
    })
  }

}
