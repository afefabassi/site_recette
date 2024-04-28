import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-ingredients',
  templateUrl: './recipe-ingredients.component.html',
  styleUrls: ['./recipe-ingredients.component.css']
})
export class RecipeIngredientsComponent {
  @Input() ingredientsString!: string; // Input property to receive the ingredients string
  ingredientsObject: { [section: string]: string[] } = {}; // Object to hold the parsed ingredients

  constructor() { }

  // Initialization logic
  ngOnInit() {
    if (this.ingredientsString) {
      this.ingredientsObject = JSON.parse(this.ingredientsString.replace(/'/g, '"'));
    }
  }
}
