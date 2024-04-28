import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetteListeComponent } from './recette-liste/recette-liste.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { RecipeTitleComponent } from './recipe-title/recipe-title.component';
import { RecipeImageComponent } from './recipe-image/recipe-image.component';
import { RecipeDescriptionComponent } from './recipe-description/recipe-description.component';
import { RecipeInformationComponent } from './recipe-information/recipe-information.component';
import { RecipeInstructionsComponent } from './recipe-instructions/recipe-instructions.component';
import { RecipeIngredientsComponent } from './recipe-ingredients/recipe-ingredients.component';
import { RecipePropertiesComponent } from './recipe-properties/recipe-properties.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
  
    RecetteListeComponent,
        RecipePageComponent,
        RecipeTitleComponent,
        RecipeImageComponent,
        RecipeDescriptionComponent,
        RecipeInformationComponent,
        RecipeInstructionsComponent,
        RecipeIngredientsComponent,
        RecipePropertiesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    RecetteListeComponent,
    RecipePageComponent
  ]
})
export class RecipesModule { }
