import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { RecetteListeComponent } from './recipes/recette-liste/recette-liste.component';

const routes: Routes = [
  {path: '',component: HomePageComponent},
  {path: 'recettes',component: RecetteListeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
