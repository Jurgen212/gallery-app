import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PopularPhotosComponent } from './popular-photos/popular-photos.component';
import { PopularVideosComponent } from './popular-videos/popular-videos.component';
import { SearchPhotosComponent } from './search-photos/search-photos.component';
import { SearchVideosComponent } from './search-videos/search-videos.component';

const routes: Routes = [
  {
    path:'',
    children: [
      { path: 'home'          , component: HomeComponent},
      { path: 'popular-photos', component: PopularPhotosComponent},
      { path: 'popular-videos', component: PopularVideosComponent},
      { path: 'search-photos' , component: SearchPhotosComponent },
      { path: 'search-videos' , component: SearchVideosComponent},
      { path: '**'            , redirectTo: 'home' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
