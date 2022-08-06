import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../peticiones.service';
import { Video } from '../../interfaces';

@Component({
  selector: 'app-search-videos',
  templateUrl: './search-videos.component.html',
  styleUrls: ['./search-videos.component.css']
})
export class SearchVideosComponent implements OnInit {

  constructor( private peticionServ: PeticionesService) { }

  termino: string = '';

  ngOnInit(): void {

  } 
  
  busqueda: boolean = false;
  searchVideoResponse !: Video[];
  
  searchVideo( ){
    this.busqueda = true;
    
    this.peticionServ.obtenerVideoByQuery( this.termino )

    .subscribe( resp => {
      this.busqueda = false;
      this.searchVideoResponse = resp.videos ;
      
      console.log( this.searchVideoResponse );
      
    })

    this.termino = '';
    
  }

}
