// Importamos Injectable.
// Permite que Angular utilice esta clase
// como un servicio.
import { Injectable } from "@angular/core";
// Importamos el modelo Producto.
// Nos sirve para indicar que el carrito
// almacenará productos.
import { Producto } from '../../models/productos';
import { Productos } from "./productos";

// providedIn: 'root'
// significa que el servicio estará disponible
// en toda la aplicación.
@Injectable({
  providedIn: "root",
})
// Creamos la clase Carrito.
export class Carrito {
  // Arreglo donde se guardan los productos
  // que el usuario agrega al carrito.
  carrito: Producto[] = [];
  
  cantidades: number[] = [];

  productos: (Productos & {cantidad: number})[]=[]
  // Agrega un producto al carrito.
 agregar(producto: Producto){
   this.carrito.push(producto);
 }

 // Elimina un producto según su ID.
 eliminar(id:number){
   this.carrito = this.carrito.filter(
     p => p.id !== id
   );
 }


  // Devuelve todos los productos
  // almacenados en el carrito.

 obtenerCarrito(){
   return this.carrito;
 }
}

//Este servicio se encarga de administrar los productos agregados al carrito.
//Su función es guardar, agregar, eliminar y devolver los productos seleccionados por el usuario.
//Un servicio es una clase que se utiliza para compartir datos y funcionalidades entre distintos componentes.
//ejemplo: Productos
//injectable: Le indica a Angular que esta clase puede utilizarse como servicio en toda la aplicación.
//providedIn: "root", ; Significa que Angular crea una única instancia del servicio para toda la aplicación.