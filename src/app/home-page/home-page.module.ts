import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { BannerListComponent } from './banner-list/banner-list.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    BannerListComponent,
    HeroSectionComponent,
    HomePageComponent,
    TestimonialComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
