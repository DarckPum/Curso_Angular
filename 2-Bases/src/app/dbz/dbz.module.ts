import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponentD } from './component/list/list.component';
import { AddCharacterComponent } from './component/add-character/add-character.component'



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponentD,
    AddCharacterComponent,
  ],
  exports:[
    MainPageComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }

