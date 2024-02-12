import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public n: string = "Resolviendo la tarea.";

   //Propiedades
   get Mosn():string {
    return this.n.toUpperCase();
  }
}
