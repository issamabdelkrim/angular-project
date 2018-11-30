
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable()
export class AnnoncesServices {
   
   
    constructor(private httpClient: HttpClient){
        console.log("AnnoncesService initialized")
    }
    getAllAnnonces() {
      return  this.httpClient.get("/assets/annonces.json");
    }
}