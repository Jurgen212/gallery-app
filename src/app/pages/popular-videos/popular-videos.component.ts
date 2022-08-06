import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../peticiones.service';
import { Video } from '../../interfaces';

@Component({
  selector: 'app-popular-videos',
  templateUrl: './popular-videos.component.html',
  styleUrls: ['./popular-videos.component.css']
})
export class PopularVideosComponent implements OnInit {

  public videosRecibidos : Video[] = []; //Array with the videos

  constructor(  private peticionServ: PeticionesService) { }

  ngOnInit(): void {
      this.peticionServ.obtenerVideosDiarios()
      .subscribe( data => {
        this.videosRecibidos = data.videos;
        console.log( data );
      })
  }
}
