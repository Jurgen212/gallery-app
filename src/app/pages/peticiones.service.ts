import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { RespFotos, RespVideos } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  //Object header, this item goes in the petition
  header = new HttpHeaders();

  //We create the url 
  private _url_photos: string = "https://api.pexels.com/v1/";
  private _url_videos: string = "https://api.pexels.com/videos/";

  constructor( private http: HttpClient) {
    this.header = this.header.set('Authorization','563492ad6f917000010000011b484dfce17943d5b10744c62be52b60');
   }


  //Http gets methods


  obtenerFotosDiarias(): Observable<RespFotos>{
    return this.http.get<RespFotos>( `${ this._url_photos }curated`, { headers:  this.header});
  }

  obtenerVideosDiarios(): Observable<RespVideos>{
    return this.http.get<RespVideos>(` ${ this._url_videos}popular?per_page=5`, { headers: this.header});
  }

  //Http get searchs methods
  obtenerFotoByQuery( query : string  ): Observable<RespFotos>{
    return this.http.get<RespFotos>(`${  this._url_photos }search/?per_page=10&query=${ query }`, { headers: this.header });
  }

  obtenerVideoByQuery( query : string  ): Observable<RespVideos>{
    return this.http.get<RespVideos>(`${  this._url_videos }search?query=${ query }`, { headers: this.header });
  }
}
