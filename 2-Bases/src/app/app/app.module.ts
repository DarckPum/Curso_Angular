import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '../app.component';
import { CounterComponet } from '../counter/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponet
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers:[],
  bootstrap:[]
})
export class AppModule {
}
