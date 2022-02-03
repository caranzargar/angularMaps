import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl  from 'mapbox-gl';
@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
    .mapa-container{
      width: 100%;
      height: 100%;
    }
    .row{
        background-color: white;
        border-radius: 50px;
        bottom: 50px;
        left: 50px;
        padding: 10px;
        position: fixed;
        z-index: 9999;
      }
  `
  ]
})
export class ZoomRangeComponent implements AfterViewInit {
  @ViewChild('mapa') divMapa!: ElementRef;

  mapa!: mapboxgl.Map;
  zoomLevel: number = 14;
  constructor() { 
    console.log('constructor', this.divMapa);
  }

  ngAfterViewInit(): void {  

    console.log('onInit', this.divMapa);
    
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.53771892949021,-8.374271847881204 ],
      zoom: this.zoomLevel
    });
  }
  
  zoomOut(){
    console.log('Zoom Out');
    this.mapa.zoomOut();
    
    this.zoomLevel = this.mapa.getZoom();
  }


  zoomIn(){
    console.log('Zoom In');
    this.mapa.zoomIn()

    this.zoomLevel = this.mapa.getZoom();
  }
}
