import { Component } from '@angular/core';
// Importamos la interfaz Producto.
// Sirve para indicar qué datos tiene cada producto.
import { Producto } from '../../../models/productos';
// Importamos el servicio Carrito.
// Nos permite agregar productos al carrito.
import { Carrito } from '../../servicios/carrito';
import { Favoritos } from '../../servicios/favoritos';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})

export class Inicio {
 // Angular inyecta los servicios.
// Esto permite utilizar las funciones
// del carrito y de favoritos.
//El constructor conecta el componente con los servicios de carrito y favoritos para poder utilizarlos."
  constructor(
    private carritoService: Carrito,
    private favoritosService: Favoritos
  ) { }

  productosDestacados: Producto[] = [

    {
      id: 101,
      nombre: "Labial Kiko",
      descripcion: "Labial líquido de larga duración",
      precio: 6500,
      stock: 5,
      imagen: "https://i.pinimg.com/736x/e4/35/2a/e4352adc5cdab695b4bda89b3664f82e.jpg",
      categoria: "maquillaje",
      disponibilidad: true
    },

    {
      id: 102,
      nombre: "Base Líquida",
      descripcion: "Base de cobertura completa",
      precio: 2500,
      stock: 5,
      imagen: "https://i.pinimg.com/736x/d0/3e/a5/d03ea54e4dce667a4aa77a85cd268cbb.jpg",
      categoria: "maquillaje",
      disponibilidad: true
    },

    {
      id: 103,
      nombre: "Paleta de Sombras",
      descripcion: "Sombras en tonos rosados",
      precio: 4500,
      stock: 5,
      imagen: "https://i.pinimg.com/736x/81/7a/e8/817ae8f68478cdfdb3e05cb18c8abca0.jpg",
      categoria: "maquillaje",
      disponibilidad: true
    }

  ];

  agregarAlCarrito(producto: Producto) {

    this.carritoService.agregar(producto);

    alert(
      producto.nombre + ' agregado al carrito 🛒'
    );

  }

  agregarFavorito(producto: Producto) {

    this.favoritosService.agregar(producto);

    alert(
      producto.nombre + ' agregado a favoritos '
    );

  }

}


