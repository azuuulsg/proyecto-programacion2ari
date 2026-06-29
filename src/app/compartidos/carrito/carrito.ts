import { Component } from '@angular/core';
//Importa el servicio Carrito. Le cambiaste el nombre a: CarritoService porque tu componente también se llama:
//carrito, porque tu componente también se llama:
import { Carrito as CarritoService } from '../../servicios/carrito';

//Importa la interfaz Producto.
import { Producto } from '../../../models/productos';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito {
  //Creamos un arreglo vacío. Va a guardar todos los productos agregados al carrito.
  productos: Producto[] = [];
  cantidades: number[] = []
  //Angular crea automáticamente el servicio y lo guarda en: this.carritoService
  //constructor(private carritoService: CarritoService) {
  //Le pide al servicio todos los productos guardados.
  //this.productos = this.carritoService.obtenerCarrito();
  //}
  constructor(private carritoService: CarritoService) {

    // Cargamos los productos guardados en el carrito.
    this.productos = this.carritoService.obtenerCarrito();

    // A cada producto le asignamos cantidad 1.
    this.productos.forEach(() => {

      this.cantidades.push(1);

    });

  }
  //Recibe el ID del producto.
  eliminarProducto(id: number) {
    //Llama al servicio y elimina el producto.
    this.carritoService.eliminar(id);
    //Actualiza la tabla. Así desaparece inmediatamente de la pantalla.
    this.productos = this.carritoService.obtenerCarrito();
  }
  // Aumenta la cantidad de un producto.
  aumentarCantidad(index: number) {

    this.cantidades[index]++;

  }

  // Disminuye la cantidad de un producto.
  disminuirCantidad(index: number) {

    if (this.cantidades[index] > 1) {

      this.cantidades[index]--;

    }

  }

  // Calcula el total de todos los productos
  calcularTotal() {
    //creamos una variable, empiexa en 0
    let total = 0;
    //recorremos todos los productos con forEach
    this.productos.forEach((producto, index) => {

      total += producto.precio * this.cantidades[index];

    });

    return total;
  }

  // Genera una factura sencilla
  finalizarCompra() {
    // Creamos una variable llamada factura.
    // \n significa "salto de línea".
    let factura = 'FACTURA\n\n';


    this.productos.forEach((producto, index) => {

      factura +=
        producto.nombre +
        ' x ' +
        this.cantidades[index] +
        ' - $' +
        (producto.precio * this.cantidades[index]) +
        '\n';
    });

    factura +=
      '\nTOTAL: $' +
      this.calcularTotal();

    alert(factura);

  }
}

//"El componente Carrito obtiene los productos desde el servicio Carrito.
// Implementé un método para eliminar productos, otro para calcular el total recorriendo el arreglo con forEach y
//  otro para finalizar la compra. Al finalizar la compra se genera una factura simple en formato texto, mostrando cada producto y el total acumulado, que luego se muestra mediante un alert."