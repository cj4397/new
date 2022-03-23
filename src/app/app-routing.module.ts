import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { AlbumComponent } from './album/album.component';
import { BlogComponent } from './blog/blog.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CheckOutComponent } from './check-out/check-out.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FeaturesComponent } from './features/features.component';

import { HeroesComponent } from './heroes/heroes.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { HomeComponent } from './home/home.component';

import { PricingComponent } from './pricing/pricing.component';
import { ProductComponent } from './product/product.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { StarterComponent } from './starter/starter.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'album', component: AlbumComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'check-out', component: CheckOutComponent },
  
  { path: 'dashboard', component: DashboardComponent },
  { path: 'features', component: FeaturesComponent },
  
  { path: 'heroes', component: HeroesComponent },
  { path: 'jumbotron', component: JumbotronComponent },
  
  { path: 'navbar', component: NavbarComponent },
 
  { path: 'pricing', component: PricingComponent },
  { path: 'product', component: ProductComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'starter', component: StarterComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
