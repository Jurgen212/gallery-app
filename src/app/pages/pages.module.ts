import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SearchPhotosComponent } from './search-photos/search-photos.component';
import { PopularPhotosComponent } from './popular-photos/popular-photos.component';
import { SearchVideosComponent } from './search-videos/search-videos.component';
import { PopularVideosComponent } from './popular-videos/popular-videos.component';
import { HomeComponent } from './home/home.component';
import { TarjetasComponent } from '../components/tarjetas/tarjetas.component';
import { TarjetaVideoComponent } from '../components/tarjeta-video/tarjeta-video.component';
import { FormsModule } from '@angular/forms';

//PRIME NG
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SpinnerComponent } from '../components/spinner/spinner.component';



@NgModule({
  declarations: [
    HomeComponent,
    PopularVideosComponent,
    PopularPhotosComponent,
    SearchPhotosComponent,
    SearchVideosComponent,
    SpinnerComponent,
    TarjetasComponent,
    TarjetaVideoComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ProgressSpinnerModule
  ]
})
export class PagesModule { }
