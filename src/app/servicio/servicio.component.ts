import { Component } from '@angular/core';
import { Servicio } from './servicio';

@Component({
    selector: 'servicio',
    templateUrl: './servicio.component.html'
})
export class ServicioComponent{
    public titulo = 'Servicios';
    public servicios:Array<Servicio>;
    public txtNom:String; txtDes:String;
    public idServicio;
    public sltipo = "Todos";

    constructor(){
        this.servicios = [
            new Servicio(1, 'Electricidad', 'Servicio de Electricidad', 'Hogar'),
            new Servicio(2, 'Auxilio Mecanico', 'Servicio de Auxilio Mecanico', 'Autos'),
            new Servicio(3, 'Chofer reemplazo', 'Servicio de Chofer reemplazo', 'Autos'),
            new Servicio(4, 'Medico a domicilio', 'Servicio de Medico a domicilio', 'Salud'),
            new Servicio(5, 'Ambulancia', 'Servicio de Ambulancia', 'Salud'),
            new Servicio(6, 'Gasfitero', 'Servicio de Gasfitero', 'Hogar')
        ]
    }

    ngOnInit(){
    }

    //Recoje el nombre y descripcion del servicio a editar
    setServicio(id){
        //Busqueda en objeto por Id
        var res = this.servicios.filter(serv => serv.id == id);
        
        this.txtNom = res[0].nombre;
        this.txtDes = res[0].descripcion;
        this.idServicio = id;
    }

    //Actualiza en el objeto el nombre y descripcion 
    actualizarServicio(){
        //Busqueda en objeto por Id
        var res = this.servicios.filter(serv => serv.id == this.idServicio);

        var respuesta = confirm("¿Está seguro de MODIFICAR el servicio " +
                         res[0].nombre.toString() + "?");
        if(respuesta){
            for (var i in this.servicios) {
                if (this.servicios[i].id == this.idServicio) {
                    this.servicios[i].nombre = this.txtNom.toString();
                    this.servicios[i].descripcion = this.txtDes.toString();
                    alert('Se modificó correctamente.');
                    this.limpiar();
                    break; //Stop for
                }//Fin if
            }//Fin for
        }//Fin if
    }

    //Elimina el objeto que se envia en el parametro 
    eliminarServicio(id){
        //Busqueda en objeto por Id
        var res = this.servicios.filter(serv => serv.id == id);

        var respuesta = confirm("¿Está seguro de ELIMINAR el servicio " + res[0].nombre.toString() +"?");
        if (respuesta){
            for (var i in this.servicios) {
                if (this.servicios[i].id == id) {
                    this.servicios.splice(Number(i),1);
                    alert('Se eliminó correctamente.');
                    this.limpiar();
                    break; //Stop for
                }//Fin if
            }//Fin for
        }//Fin if
    }

    //Limpia los input de Nombre y Descripción
    limpiar(){
        this.txtNom = "";
        this.txtDes = "";
        this.idServicio = "";
    }

    //Captura el Tipo de Servicio a listar
    listar(slTipo){
        this.sltipo = slTipo.toString();    
    }
}