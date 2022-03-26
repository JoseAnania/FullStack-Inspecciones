/* Componente Creado para la lógica de mostrar las Listas de Inspecciones */

import { Component, OnInit } from '@angular/core';
import { InspeccionApiService } from '../../service/inspeccion-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mostrar-inspeccion',
  templateUrl: './mostrar-inspeccion.component.html',
  styleUrls: ['./mostrar-inspeccion.component.css']
})
export class MostrarInspeccionComponent implements OnInit {

  // creamos las listas vacías
  inspeccionList$!: Observable<any[]>;
  tipoInspeccionList$!: Observable<any[]>;
  tipoInspeccionList: any = [];

  // mapa para mostrar la lista asociada con la FK (nos sirve para mostrar el nombre en lugar del ID)
  tipoInspeccionMap: Map<number, string> = new Map();

  // propiedad variable del Título del Modal (para agregar Inspección)
  tituloModal: string = '';

  // propiedad variable para habilitar el componente de Agregar o Editar Inspecciones
  activarAgregarEditarComponent: boolean = false;

  // propiedad objeto Inspección vacío (que llenaremos al abrir el modal)
  inspeccion:any;

  // inyectamos el Servicio
  constructor(private service: InspeccionApiService) { }

  ngOnInit(): void {

    // al iniciar la página mostramos la Lista de Inspecciones
    this.inspeccionList$ = this.service.getInspeccionList();

    // al iniciar la página mostramos la Lista de Tipos de Inspecciones
    this.tipoInspeccionList$ = this.service.getTipoInspeccionList();

    // al iniciar la página mostramos los nombres de los Tipos de Inspección en la tabla Inspoección (en lugar del ID)
    this.actualizarTipoInspeccionMap(); 
  }

  // método para abrir el Modal (y poder agregar una nueva Inspección)
  abrirModal() {

    this.inspeccion = {

      id:0,
      estado: null,
      comentarios: null,
      tipoInspeccionId: null,
    }
    this.tituloModal = "Agregar Inspección";
    this.activarAgregarEditarComponent = true;
  }

  // método para abrir el Modal (y poder modificar una nueva Inspección)
  abrirEditarModal(item: any) {

    this.inspeccion = item;
    this.tituloModal = "Editar Inspección";
    this.activarAgregarEditarComponent = true;
  }

  // método para eliminar una Inspección
  eliminarInspeccion(item: any) {

    if(confirm(`¿Está seguro que desea eliminar la Inspección ${item.id}`)){

      this.service.deleteInspeccion(item.id).subscribe(res => {

        // cerramos el modal
      var cerrarModal = document.getElementById('agregar-editar-modal-close');

      if(cerrarModal) {

        cerrarModal.click();
      }

      // mostramos alerta de éxito
      var eliminarExito = document.getElementById('eliminar-exito-alert');
      
      if(eliminarExito) {

        eliminarExito.style.display = "block";
      }

      setTimeout(function() {
        if(eliminarExito) {
          
          eliminarExito.style.display = "none";
        }
      }, 4000);
      })
    }
  }

  // método para cerrar el Modal
  cerrarModal() {

    this.activarAgregarEditarComponent = false;

    // actualizamos la lista (por si agregamos o modificamos una Inspección)
    this.inspeccionList$ = this.service.getInspeccionList();
  }

  // método para mostrar el nombre del Tipo de Inspección en la Lista de Inspecciones (en lugar del ID)
  actualizarTipoInspeccionMap() {
    
    this.service.getTipoInspeccionList().subscribe(data =>{

      this.tipoInspeccionList = data;

      for(let i = 0; i < data.length; i++) {

        this.tipoInspeccionMap.set(this.tipoInspeccionList[i].id, this.tipoInspeccionList[i].nombreInspeccion);
      }
    })
  }

}
