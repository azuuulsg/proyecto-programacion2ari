// Importamos Injectable.
// Permite convertir esta clase en un servicio.
import { Injectable } from '@angular/core';

// Importamos la interfaz Producto
// para guardar productos en favoritos.
import { Producto } from '../../models/productos';

// Angular podrá utilizar este servicio
// en cualquier componente de la aplicación.
@Injectable({
  providedIn: 'root'
})
export class Favoritos {

  // Arreglo donde se guardarán
  // los productos favoritos.
  favoritos: Producto[] = [];

  // Agregar producto a favoritos.
  agregar(producto: Producto) {
    //que hace el metodo agregar? Agrega un producto al arreglo de favoritos utilizando push().
    this.favoritos.push(producto);

  }

  // Eliminar producto de favoritos utilizando su id.
  eliminar(id: number) {

    this.favoritos = this.favoritos.filter(
      p => p.id !== id
    );

  }

  // Devuelve todos los favoritos.
  obtenerFavoritos() {
    //Devuelve todos los productos favoritos para poder mostrarlos en el componente Favoritos.
    return this.favoritos;

  }

}