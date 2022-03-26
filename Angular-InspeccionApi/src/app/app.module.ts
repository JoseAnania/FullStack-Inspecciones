import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { InspeccionComponent } from './inspeccion/inspeccion.component';
import { MostrarInspeccionComponent } from './inspeccion/mostrar-inspeccion/mostrar-inspeccion.component';
import { AgregarEditarInspeccionComponent } from './inspeccion/agregar-editar-inspeccion/agregar-editar-inspeccion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InspeccionApiService } from './service/inspeccion-api.service';

@NgModule({
  declarations: [
    AppComponent,
    InspeccionComponent,
    MostrarInspeccionComponent,
    AgregarEditarInspeccionComponent
  ],
  imports: [
    BrowserModule,
    // importamos el Módulo que nos permite usar peticiones API
    HttpClientModule,
    // importamos los Módulos que nos permite usar Formularios Reactivos
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    // importamos el servicio
    InspeccionApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
