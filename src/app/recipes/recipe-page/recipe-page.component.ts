import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetteService } from '../recette.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {
  recipe: any; // Declare a property to store the fetched recipe data

  constructor(
    private route: ActivatedRoute,
    private recetteService: RecetteService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const recipeId = +params['id']; // Convert the route parameter to a number
      this.recetteService.getRecetteById(recipeId).subscribe(
        (data) => { // Use the Recipe interface to define the type
          this.recipe = data; // Assign the fetched recipe data to the recipe property
          console.log(this.recipe); 
          console.log(typeof this.recipe.instruction);
          console.log(typeof this.recipe.ingredients);// Add this line
        },
        error => {
          console.error('Error fetching recipe:', error);
        }
      );
    });
  }
}