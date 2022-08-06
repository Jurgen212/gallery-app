import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../peticiones.service';
import { Photo } from '../../interfaces';


@Component({
  selector: 'app-search-photos',
  templateUrl: './search-photos.component.html',
  styleUrls: ['./search-photos.component.css']
})
export class SearchPhotosComponent implements OnInit {

  constructor( private peticionServ: PeticionesService) { }


  termino: string = '';

  ngOnInit(): void {

  } 
  searchPhotoResponse !: Photo[];
  
  busqueda: boolean = false;

  searchPhoto( ){
    
    this.busqueda = true;

    this.peticionServ.obtenerFotoByQuery( this.termino )
    .subscribe( resp => {
      this.busqueda = false;
      this.searchPhotoResponse = resp.photos;
      console.log( this.searchPhotoResponse );
    })

    this.termino = '';
    
  }

}
