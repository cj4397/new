import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AlbumComponent } from './album/album.component';
import { BlogComponent } from './blog/blog.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CheckOutComponent } from './check-out/check-out.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FeaturesComponent } from './features/features.component';

import { HeroesComponent } from './heroes/heroes.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';


import { PricingComponent } from './pricing/pricing.component';
import { ProductComponent } from './product/product.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { StarterComponent } from './starter/starter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AlbumComponent,
    BlogComponent,
    CarouselComponent,
    CheckOutComponent,
    
    DashboardComponent,
    FeaturesComponent,
  
    HeroesComponent,
    JumbotronComponent,
    
    
    PricingComponent,
    ProductComponent,
    SignInComponent,
    StarterComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
