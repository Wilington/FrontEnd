import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform{
    transform(items: any[], texto:string): any[]{
        if(!items) return [];
        if(!texto) return items;
        
        if(texto == "Todos"){
            //Retorno todos los servicios
            return items;
        } else {
            //Busqueda por tipo
            return items.filter(serv => serv.tipo == texto);
        }
    }
}