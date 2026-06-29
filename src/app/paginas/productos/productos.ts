//// Importamos Component para crear
// un componente Angular.
import { Component } from '@angular/core';
//// Importamos la interfaz Producto.
// Nos permite definir correctamente
// los datos de cada producto.
import { Producto } from '../../../models/productos';
// Importamos RouterLink para poder
// navegar entre páginas mediante rutas.
import { RouterLink } from '@angular/router';

// Importamos el servicio carrito.
import { Carrito } from '../../servicios/carrito';

//Importamos el servicio carrito.
import { Favoritos } from '../../servicios/favoritos';

@Component({
  selector: 'app-productos',
  imports: [RouterLink],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {

  //El constructor permite utilizar los servicios dentro del componente Productos.

  //que es un constru: Es un método que
  //  Angular ejecuta al crear el componente y sirve para recibir dependencias, como los servicios.
  constructor(private carritoService: Carrito,
    private favoritosService: Favoritos
  ) { }

  //Es un arreglo que contiene varios objetos de tipo Producto.
  Productos: Producto[] = [
    {
      id: 1,
      nombre: "Corrector",
      descripcion: "Corrector de ojeras",
      precio: 4500,
      stock: 4,
      imagen: "https://i.pinimg.com/736x/11/d8/be/11d8be89cdebd8eaa77b26dd70067e8e.jpg",
      categoria: "almacen",
      disponibilidad: true,
    },
    {
      id: 2,
      nombre: "Rimel",
      descripcion: "Rimel de pestañas",
      precio: 5500,
      stock: 2,
      imagen: "https://i.pinimg.com/736x/f0/da/13/f0da13f060bd17b9d3b5fdf243fb449c.jpg",
      categoria: "almacen",
      disponibilidad: true,
    },
    {
      id: 3,
      nombre: "Rubor Dior",
      descripcion: "Rubor Rosado Dior",
      precio: 3300,
      stock: 4,
      imagen: "https://i.pinimg.com/736x/67/1e/ab/671eabb572e5002e82fe90c3eb9f9aba.jpg",
      categoria: "almacen",
      disponibilidad: true,
    },
    {
      id: 4,
      nombre: "Labial KiKo",
      descripcion: "Labial liquido Kiko",
      precio: 6500,
      stock: 7,
      imagen: "https://i.pinimg.com/736x/2c/53/30/2c5330a9cb297c3dab62d0ab9e788b5e.jpg",
      categoria: "almacen",
      disponibilidad: true,
    },
    {
      id: 5,
      nombre: "Polvo compacto",
      descripcion: "Polvo compacto Dior",
      precio: 6600,
      stock: 1,
      imagen: "https://i.pinimg.com/1200x/05/21/f8/0521f8c1c3c7e7ec2fdbd79305b2b15b.jpg",
      categoria: "almacen",
      disponibilidad: true,
    },
    {
      id: 6,
      nombre: "Sombras de ojos",
      descripcion: "Paleta  de sombras rosa",
      precio: 4500,
      stock: 11,
      imagen: "https://i.pinimg.com/736x/73/2b/12/732b12c99b46df2b06f5be1badea003d.jpg",
      categoria: "almacen",
      disponibilidad: true, 
    },
    {
      id: 7,
      nombre: "Paleta de sombras",
      descripcion: "Sombras oscuras",
      precio: 5500,
      stock: 3,
      imagen: "https://i.pinimg.com/1200x/31/6c/85/316c85dd6ff19c409b9864efc1251f43.jpg",
      categoria: "almacen",
      disponibilidad: true,
    },
    {
      id: 8,
      nombre: "iluminador",
      descripcion: "iluminador en polvo",
      precio: 3000,
      stock: 9,
      imagen: "https://i.pinimg.com/736x/b7/73/80/b77380b4314f71b9b191701ebc7ac542.jpg",
      categoria: "almacen",
      disponibilidad: true,
    },
    {
      id: 9,
      nombre: "Base liquida",
      descripcion: "Base Dior",
      precio: 2500,
      stock: 5,
      imagen: "https://i.pinimg.com/736x/d0/3e/a5/d03ea54e4dce667a4aa77a85cd268cbb.jpg",
      categoria: "almacen",
      disponibilidad: true,
    }


  ]
  
  //Recibe el producto seleccionado.
  agregarAlCarrito(producto: Producto) {
    //Lo envía al servicio carrito.
    this.carritoService.agregar(producto);
    //Muestra un mensaje.
    alert(
      producto.nombre + ' agregado al carrito'
    );
  }
  // Agrega un producto a favoritos.
 
  agregarFavorito(producto: Producto) {

    this.favoritosService.agregar(producto);

    alert(
      producto.nombre + ' agregado a favoritos '
    );
  }
}
//por que use un servicio?; Porque necesitaba compartir los productos entre distintos componentes.
//¿Qué componente utiliza el servicio carrito?; Productos, Ofertas y Carrito.
//¿Qué componente utiliza favoritos?; Productos y Favoritos.

//productos.ts; Este componente se encarga de mostrar los productos de la tienda. 
// También permite agregarlos al carrito o a favoritos mediante los servicios correspondientes.

//El componente Productos muestra los productos de la tienda mediante un arreglo de objetos de tipo Producto. Utilicé el servicio Carrito para 
// agregar productos al carrito y el 
// servicio Favoritos para guardar productos favoritos. Además, cada acción muestra un mensaje al usuario mediante alert.