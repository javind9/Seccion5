import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizados'
})
export class CapitalizadosPipe implements PipeTransform {

  transform(value: string, todas: boolean = true): string {
    value = value.toLocaleLowerCase();
    let nombres = value.split(' ');

    if (todas){
      //aplica a cada elemento del array la funcion de flecha
      nombres = nombres.map( nombre => {
        return nombre[0].toUpperCase() + nombre.substr(1); //Primera letra mayúscula y le concateno lo demás empezando en la posición 1.
      })

      return nombres.join(' ');
    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }


    return nombres.join(' ');
  }

}
