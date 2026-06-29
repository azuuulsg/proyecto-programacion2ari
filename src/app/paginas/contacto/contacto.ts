import { Component } from '@angular/core';
// @Component convierte esta clase en un componente de Angular.
// Aquí se configura cómo se llamará el componente
// y qué archivos utilizará.
@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  // Esta función se ejecuta cuando el usuario
  // presiona el botón Enviar mensaje.
  enviarMensaje() {

    alert(
      'Mensaje enviado correctamente. Nos comunicaremos contigo pronto '
    );

  }
}

//El componente Contacto representa la página de contacto de mi tienda.
//  Está formado por un archivo TypeScript, un HTML y un CSS. En el TypeScript creé una función llamada 
// enviarMensaje(). Cuando el usuario presiona el botón Enviar mensaje, Angular ejecuta esta función y 
// muestra un alert confirmando que el mensaje fue enviado correctamente."
