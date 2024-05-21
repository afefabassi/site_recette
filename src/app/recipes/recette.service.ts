import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class RecetteService {
  readonly API_URL = "http://localhost:9090"
  readonly ENDPOINT_RECETTES = "/recettes/"
  readonly ENDPOINT_LISTECOURSE_ADD = "/listecourses/save"
  readonly ENDPOINT_LISTECOURSE_DELETE = "/listecourses/delete"



  constructor(private httpClient: HttpClient) {

   }
   getRecettes() {
    return this.httpClient.get(this.API_URL+this.ENDPOINT_RECETTES)
   }

   getRecetteById(id: number){
    return this.httpClient.get<any>(this.API_URL + this.ENDPOINT_RECETTES + id);
  }

  getRecetteByName(nom: string){
    return this.httpClient.get<any>(this.API_URL + this.ENDPOINT_RECETTES + nom )
  }

  // Method to update the liste table (adding)
  updateListe(id_recette: number): Observable<any> {
    const body = {
      id_recette: id_recette,
      id_utilisateur:101,
    };
    return this.httpClient.post(`${this.API_URL}${this.ENDPOINT_LISTECOURSE_ADD}`, body,httpOptions);
  }
  // New method to remove recipe from liste
  removeFromListe(id_recette: number): Observable<any> {
    const body = {
      id_recette: id_recette,
      id_utilisateur:101,
    };
    return this.httpClient.delete(`${this.API_URL}${this.ENDPOINT_LISTECOURSE_DELETE}${body}`,httpOptions);
  }
}




