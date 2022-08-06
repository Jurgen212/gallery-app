import { Component } from '@angular/core';
import { createClient } from 'pexels';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeticionesService } from '../peticiones.service';
import { Photo } from '../../interfaces';

@Component({
  selector: 'app-popular-photos',
  templateUrl: './popular-photos.component.html',
  styleUrls: ['./popular-photos.component.css']
})
export class PopularPhotosComponent {

  public imagenesRecibidas!: Photo[]; //Array with the pictures

  constructor(  private peticionServ: PeticionesService) { }

  //Load the photos when the component charges
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
      this.peticionServ.obtenerFotosDiarias()
      .subscribe( resp => {
        console.log( resp );
        this.imagenesRecibidas = resp.photos;
      })
      
  }

}
