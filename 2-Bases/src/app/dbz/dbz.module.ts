import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponentD } from './components/list/list.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponentD
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }

