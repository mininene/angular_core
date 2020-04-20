import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-component',
  templateUrl: './chat.component.html'  // ./ a partir de la misma carpeta
})
export class ChatComponent {

  public mensajes: string[] = ["Pedro", "Maria", "Vanessa", "Ana"];

   public nombre = "Iranzo Fuentes"


  public cambiaNombre() {
    this.nombre = "Vanessa Campillo"

 
  }
}
