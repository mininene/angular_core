import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',  //nombre en el html
  templateUrl: './nav-menu.component.html', // el template en html
  styleUrls: ['./nav-menu.component.css']  //cargar el css
})
export class NavMenuComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
