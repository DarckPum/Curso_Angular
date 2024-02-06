import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoderComponent } from './poder/poder.component';
import { GamesComponent } from './games/games.component';


@NgModule({
  exports: [
    PoderComponent,
    GamesComponent,
  ],
  declarations: [
    PoderComponent,
    GamesComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PoderesModule { }
