import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: []
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input('placeholder') placeholder: string = '';

  debouncer: Subject<string> = new Subject();
  
  termino: string = "";

  constructor(private paisService: PaisService){}

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe( valor => {
        this.onDebounce.emit( valor );
    })
  }

  teclaPresionada(){
    this.debouncer.next( this.termino );
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

}
