import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin: 5px;
      }
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = [
    'africa',
    'asia',
    'europe',
    'americas',
    'oceania'
  ]

  paises: Country[] = [];

  regionActiva: string = '';
  hayError: boolean = false;

  constructor(private paisService: PaisService){}

  getClaseCSS( region: string){
    return (region === this.regionActiva) 
      ? 'btn btn-primary' 
      : 'btn btn-outline-primary'
  }

  activarRegion( region: string) {
    this.regionActiva = region;
    console.log(this.regionActiva)

    this.hayError = false;

    this.paisService.buscarRegion(this.regionActiva)
      .subscribe( (paises) => {
        this.paises = [...paises]
        console.log(this.paises)
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      })
    // TODO: hacer el llamado al servicio
  }

}
