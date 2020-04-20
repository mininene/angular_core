import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensaje-component',  //nombre del Tag
  templateUrl: './mensaje.component.html'  // ./ a partir de la misma carpeta
})
export class MensajeComponent {

  //public mensajes: string[] = ["Pedro", "Maria", "Vanessa", "Ana"];
  @Input() texto: string;
    
}
