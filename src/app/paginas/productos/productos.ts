import { Component } from '@angular/core';
import { Producto } from '../../../models/productos';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos',
  imports: [RouterLink],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
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
    }

  ]

}

