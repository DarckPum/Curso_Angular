import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe-poder',
  templateUrl: './poder.component.html',
  styleUrls: ['./poder.component.css']
})
export class PoderComponent {
  public d: string = 'Descripcion';
  public u: string = 'Movilidad y arma.';
  public p: number = 20;
  public v: string = 'Duende verde, Octropus y Venom';

  //Propiedades
  get descu():string {
    return this.u.toUpperCase();
  }

  //Metodo
  getPoderDescripcion():string {
    return `${ this.u } - ${ this.p } - ${ this.v }`
  }

  chageU(): void {
    this.u = 'Armamento y fuerza';
  }
  changeP(): void {
    this.p = 90;
  }
  changeV(): void {
    this.v = 'El mismo';
  }

  resetFrom(): void {
    this.u = 'Movilidad y arma.';
    this.p = 20;
    this.v = 'Duende verde, Octropus y';

  }


}
