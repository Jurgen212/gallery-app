import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../../interfaces';

@Component({
  selector: 'app-tarjeta-video',
  templateUrl: './tarjeta-video.component.html',
  styleUrls: ['./tarjeta-video.component.css']
})
export class TarjetaVideoComponent implements OnInit {


  @Input() videosRecibidos!: Video[]; 

  constructor() { }

  ngOnInit(): void {
  }

}
