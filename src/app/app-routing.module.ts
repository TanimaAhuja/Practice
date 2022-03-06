import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DanceComponent } from './dance/dance.component';
import { MeditationComponent } from './meditation/meditation.component';
import { CookingComponent } from './cooking/cooking.component';
import { MusicComponent } from './music/music.component';
import { TravellingComponent } from './travelling/travelling.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {component: HomeComponent, path:''},
    {component: DanceComponent, path:'dance'},
    {component: MeditationComponent, path:'meditation'},
    {component: CookingComponent, path:'cooking'},
    {component: TravellingComponent, path:'travelling'},
    {component: MusicComponent, path:'music'},
    {component: ContactComponent, path:'contact'}
  
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
