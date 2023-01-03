import { Component, Input } from '@angular/core';

import { PaisService } from '../../services/pais.service';

import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
})
export class PaisTablaComponent {

  @Input('paises') paises: Country[] = []; 

  constructor(private paisService: PaisService){}
}
