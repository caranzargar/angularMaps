import { Component } from '@angular/core';

interface MenuItem{
  ruta: string;
  nombre: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    li:hover{
      color: white;
      border-color: #8D98BB;
      font-size: 1.1rem;
      background-color: #636df8;
      transition: 400ms;
      cursor: pointer
    }
    `
  ]
})
export class MenuComponent {

  menuItems: MenuItem[] = 
  [
    {
      ruta: '/mapas/fullscreen',
      nombre: 'FullScreen'
    },
    {
      ruta: '/mapas/zoom-range',
      nombre: 'Zoom Range'
    },
    {
      ruta: '/mapas/marcadores',
      nombre: 'Marcadores'
    },
    {
      ruta: '/mapas/propiedades',
      nombre: 'Propiedades'
    }
];


}
