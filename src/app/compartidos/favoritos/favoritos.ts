import { Component } from '@angular/core';

// Importamos el servicio Favoritos.
// Este servicio guarda los productos favoritos
// para poder acceder a ellos desde distintos componentes
import { Favoritos as FavoritosService } from '../../servicios/favoritos';


// Importamos la interfaz Producto.
// Nos sirve para indicar que el arreglo
// contiene objetos de tipo Producto.
import { Producto } from '../../../models/productos';

@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos {

  // Arreglo donde se guardarán los favoritos
  // Arreglo donde vamos a guardar
  // los productos favoritos para mostrarlos en pantalla.
  productos: Producto[] = [];

  //// Constructor:
  // Angular lo ejecuta automáticamente
  // cuando se abre este componente.
  constructor(private favoritosService: FavoritosService) {

    // Cargamos los favoritos guardados
    // // Obtenemos todos los productos guardados
    // en el servicio de favoritos.
    this.productos =
      this.favoritosService.obtenerFavoritos();
  }

  // Elimina un favorito
  eliminarFavorito(id: number) {
    // // Eliminamos el producto del servicio.
    this.favoritosService.eliminar(id);

    // Actualizamos la lista
    this.productos =
      this.favoritosService.obtenerFavoritos();
  }
}

//El componente Favoritos se encarga de mostrar los productos marcados como favoritos.
//  Para eso utiliza el servicio FavoritosService, que almacena los productos seleccionados.
//  Cuando el componente se abre, obtiene los favoritos mediante el método obtenerFavoritos(). 
// También tiene un método llamado eliminarFavorito() que permite quitar productos de la lista y actualizar la vista."