import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServicioComponent } from './servicio/servicio.component';

import { FilterPipe } from './pipes/filter.pipe';

import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ServicioComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
