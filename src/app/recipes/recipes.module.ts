import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetteListeComponent } from './recette-liste/recette-liste.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
  
    RecetteListeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [
    RecetteListeComponent
  ]
})
export class RecipesModule { }
