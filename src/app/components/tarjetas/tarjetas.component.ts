import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../interfaces';



@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() imagenesRecibidas!: Photo[]; 

}
