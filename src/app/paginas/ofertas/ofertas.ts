import { Component } from '@angular/core';

import { Carrito } from '../../servicios/carrito';

@Component({
  selector: 'app-ofertas',
  imports: [],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class Ofertas {
  // Conectamos el servicio carrito
  constructor(private carritoService: Carrito) { }

  //Aquí guardás todos los productos en oferta. Cada objeto representa una tarjeta.
  ofertas = [


    {
      id: 10,
      nombre: 'Labial KiKo',
      precioViejo: 6500,
      precioNuevo: 5200,
      descripcion: 'Labial líquido de larga duración',
      descuento: '-20%',
      imagen: 'https://i.pinimg.com/736x/2c/53/30/2c5330a9cb297c3dab62d0ab9e788b5e.jpg'
    },

    {
      id: 11,
      nombre: 'Rubor Dior',
      precioViejo: 3300,
      precioNuevo: 2800,
      descripcion: 'Rubor rosado con acabado natural',
      descuento: '-15%',
      imagen: 'https://i.pinimg.com/736x/67/1e/ab/671eabb572e5002e82fe90c3eb9f9aba.jpg'
    },

    {
      id: 12,
      nombre: 'Sombras Rosé',
      precioViejo: 4500,
      precioNuevo: 3150,
      descripcion: 'Paleta de tonos rosas brillantes',
      descuento: '-30%',
      imagen: 'https://i.pinimg.com/736x/73/2b/12/732b12c99b46df2b06f5be1badea003d.jpg'
    },

    {
      id: 13,
      nombre: 'Base Maybelline',
      precioViejo: 8500,
      precioNuevo: 7000,
      descripcion: 'Base de larga duración',
      descuento: '-18%',
      imagen: 'https://i.pinimg.com/736x/fe/15/9e/fe159ea08addab8c3b90b26dacd88472.jpg'
    },

    {
      id: 14,
      nombre: 'Delineador',
      precioViejo: 4200,
      precioNuevo: 3500,
      descripcion: 'Delineador negro resistente al agua',
      descuento: '-17%',
      imagen: 'https://i.pinimg.com/1200x/d8/20/4a/d8204aa29b304a6078de709d337a05a5.jpg'
    },

    {
      id: 15,
      nombre: 'Polvo Compacto',
      precioViejo: 7000,
      precioNuevo: 6000,
      descripcion: 'Acabado suave y natural',
      descuento: '-14%',
      imagen: 'https://i.pinimg.com/1200x/05/21/f8/0521f8c1c3c7e7ec2fdbd79305b2b15b.jpg'
    }

  ];

  //Este método se ejecuta cuando el usuario haga clink en comprar
  // Agrega una oferta al carrito
  comprar(oferta: any) {

   // Acá creo un nuevo producto.¿Por qué? Porque las ofertas tienen un formato diferente al que usa el carrito.
    //Entonces convierto la oferta en un producto que el carrito pueda entender.
    const producto = {
  
      id: oferta.id,
      //Toma el nombre de la oferta.
      nombre: oferta.nombre,

      descripcion: oferta.descripcion,
      //Usa el precio con descuento.
      precio: oferta.precioNuevo,
      //Asignamos stock 1 porque no estamos manejando cantidades todavía.
      stock: 1,
      //Guarda la imagen.
      imagen: oferta.imagen,
      //Le asignamos la categoría oferta.
      categoria: 'oferta',
      //indicamos que esta disponible
      disponibilidad: true

    };

    // Lo agregamos al carrito
    //que está dentro del servicio carrito.
    //Entonces el producto queda guardado.
    this.carritoService.agregar(producto);

    // Mostramos mensaje
    alert(
      oferta.nombre + ' agregado al carrito 🛒'
    );

  }

}


//¿Por qué creaste el método comprar()? Porque los productos de ofertas no tienen exactamente la misma
//  estructura que el modelo Producto. Entonces, cuando el usuario presiona Comprar, convierto la oferta en 
// un objeto compatible con el carrito y luego lo agrego usando el servicio Carrito."

//"El componente Ofertas muestra una lista de productos con descuento. 
// Cuando el usuario presiona el botón Comprar, se 
// ejecuta el método comprar(), que crea un producto compatible con el modelo del carrito y lo
//  agrega mediante el servicio Carrito."
