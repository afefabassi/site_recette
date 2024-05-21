import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './home-page/home-page.module';
import { RecipesModule } from './recipes/recipes.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { GeneralModule } from './general/general.module';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    RecipesModule,
    GeneralModule,
    FormsModule,
    CommonModule,
    LoginModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
