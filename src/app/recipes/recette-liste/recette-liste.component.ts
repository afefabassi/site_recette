import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../recette.service';

@Component({
  selector: 'app-recette-liste',
  templateUrl: './recette-liste.component.html',
  styleUrl: './recette-liste.component.css',
  providers: [RecetteService]
})
export class RecetteListeComponent implements OnInit {
  title = 'recette.app';
  recettes: any[] = []; // Initialize recettes as an array

  constructor(private recetteService: RecetteService) { }

  ngOnInit(): void {
    console.log('On init ....');
    this.recetteService.getRecettes().subscribe((data: any) => { // Cast data to any
      this.recettes = data;
      this.recettes.forEach(recette => {
        recette.image = JSON.parse(recette.image.replace(/'/g, '"'));
      });
    }); // Add closing parenthesis here
  }
  
}
