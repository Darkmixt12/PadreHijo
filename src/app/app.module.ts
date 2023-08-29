import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TataraAbueloComponent } from './padreHijo/tatara-abuelo/tatara-abuelo.component';
import { AbueloComponent } from './padreHijo/abuelo/abuelo.component';
import { PadreComponent } from './padreHijo/padre/padre.component';
import { HijoComponent } from './padreHijo/hijo/hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    TataraAbueloComponent,
    AbueloComponent,
    PadreComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
