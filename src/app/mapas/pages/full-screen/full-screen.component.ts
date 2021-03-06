import { Component, OnInit } from '@angular/core';
import * as mapboxgl  from 'mapbox-gl';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [
    `
      #mapa{
        width: 100%;
        height: 100%;
      }
      
    `
  ]
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('pageFullscreen');

    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.53771892949021,-8.374271847881204 ],
      zoom: 18
    });

  }

}
