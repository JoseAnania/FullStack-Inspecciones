/* Componente generado para manejar la lógica de Agregar o Editar Inspecciones */

import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspeccionApiService } from '../../service/inspeccion-api.service';

@Component({
  selector: 'app-agregar-editar-inspeccion',
  templateUrl: './agregar-editar-inspeccion.component.html',
  styleUrls: ['./agregar-editar-inspeccion.component.css']
})
export class AgregarEditarInspeccionComponent implements OnInit {

  // creamos las listas vacías
  inspeccionList$!: Observable<any[]>;
  estadoList$!: Observable<any[]>;
  tipoInspeccionList$!: Observable<any[]>;

  // inyectamos el Servicio
  constructor(private service: InspeccionApiService) { }

  // usamos el Decorador Input
  @Input() inspeccion: any;
  id: number = 0;
  estado: string = "";
  comentarios: string = "";
  tipoInspeccionId: string = "";

  
  ngOnInit(): void {

    // iniciamos los componentes del Decorador y las listas
    this.id = this.inspeccion.id;
    this.estado = this.inspeccion.estado;
    this.comentarios = this.inspeccion.comentarios;
    this.tipoInspeccionId = this.inspeccion.tipoInspeccionId;
    this.estadoList$ = this.service.getEstadoList();
    this.inspeccionList$ = this.service.getInspeccionList();
    this.tipoInspeccionList$ = this.service.getTipoInspeccionList();
  }

  // método para Agregar una Inspección (desde el Modal)
  agregarInspeccion() {

    var inspeccion = {
      estado: this.estado,
      comentarios: this.comentarios,
      tipoInspeccionId: this.tipoInspeccionId,
    }
    this.service.addInspeccion(inspeccion).subscribe(res => {

      // cerramos el modal
      var cerrarModal = document.getElementById('agregar-editar-modal-close');

      if(cerrarModal) {

        cerrarModal.click();
      }

      // mostramos alerta de éxito
      var agregarExito = document.getElementById('agregar-exito-alert');
      
      if(agregarExito) {

        agregarExito.style.display = "block";
      }

      setTimeout(function() {
        if(agregarExito) {
          
          agregarExito.style.display = "none";
        }
      }, 4000);
    })
  }

  // método para Modificar una Inspección (desde el Modal)
  modificarInspeccion() {

    var inspeccion = {
      
      id: this.id,
      estado: this.estado,
      comentarios: this.comentarios,
      tipoInspeccionId: this.tipoInspeccionId,
    }

    var id: number = this.id;

    this.service.updateInspeccion(id, inspeccion).subscribe(res => {

      // cerramos el modal
      var cerrarModal = document.getElementById('agregar-editar-modal-close');

      if(cerrarModal) {

        cerrarModal.click();
      }

      // mostramos alerta de éxito
      var modificarExito = document.getElementById('modificar-exito-alert');
      
      if(modificarExito) {

        modificarExito.style.display = "block";
      }

      setTimeout(function() {
        if(modificarExito) {
          
          modificarExito.style.display = "none";
        }
      }, 4000);
    })
  }

}
