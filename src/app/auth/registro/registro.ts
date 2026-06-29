import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  imports: [],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  // Esta función se ejecuta cuando el usuario
  // presiona el botón Registrarse.
  registrar(formulario: any) {  //Es una función que recibe el formulario completo como parámetro. Gracias a eso después podemos limpiarlo.
     // Mostramos un mensaje indicando
    // que el registro fue exitoso.
    alert(
      'Registro realizado correctamente'
    );

    // Limpia todos los campos del formulario.
    formulario.reset();

  }
}

//"El componente Registro permite simular la creación de una cuenta.
//  Cuando el usuario presiona el botón Registrarse, se ejecuta la función registrar().
//  Esta función muestra un mensaje de confirmación mediante alert() y luego utiliza reset() para 
// limpiar todos los campos del formulario."