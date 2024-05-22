import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../recette.service';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrl: './cart-button.component.css'
})
export class CartButtonComponent implements OnInit{
  liste!: { id_liste: number; id_recette: number; id_utilisateur: number; };

  cartImagePath: string = '../../assets/images/empty-cart.png'; // Default image path
  clickCount: number = 0;
  message: string = 'Liste des courses'; // Default message
  recipe: any;
  id : number = 0;
  id_recette:number = 0;
  constructor( 
    private route: ActivatedRoute,
    private recetteService: RecetteService
  ) { }
  ngOnInit(): void {
      id_recette:this.route.snapshot.params['id'] 
  }
  addList(){
    this.id ++;
    return this.id;
  }
  onClick() {
    this.clickCount++;
    this.updateImagePath();
    this.updateMessage();
  }

  private updateImagePath() {
    if (this.clickCount % 2 === 0) {
      this.cartImagePath = '../../assets/images/empty-cart.png'; // Set url1 when clickCount is even
      this.removeFromListe();
    } else {
      this.cartImagePath = '../../assets/images/full-cart.png'; // Set url2 when clickCount is odd
      this.updateListeDatabase();
    }
  }

  private updateMessage() {
    if (this.clickCount % 2 === 0) {
      this.message = 'Retiré de la liste des courses';
    } else {
      this.message = 'Ajouté à la liste des courses';
    }
  }

  private updateListeDatabase() {
    this.recetteService.updateListe(this.id_recette).subscribe(
      () => console.log('Liste updated successfully'),
      error => console.error('Failed to update liste', error)
    );
  }

  private removeFromListe() {
    this.recetteService.removeFromListe(this.id_recette).subscribe(
      () => console.log('Recipe removed from liste successfully'),
      error => console.error('Failed to remove recipe from liste', error)
    );
  }

}
