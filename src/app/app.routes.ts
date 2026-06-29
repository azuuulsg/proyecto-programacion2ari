// Importamos el tipo Routes.
// Nos permite crear el arreglo de rutas de Angular.
import { Routes } from '@angular/router';
// Importamos todos los componentes
// que vamos a utilizar en la navegación.
import { Inicio } from './paginas/inicio/inicio';
import { Contacto } from './paginas/contacto/contacto';
import { Ofertas } from './paginas/ofertas/ofertas';
import { Productos } from './paginas/productos/productos';
import { Carrito } from './compartidos/carrito/carrito';
import { Favoritos } from './compartidos/favoritos/favoritos';
import { Registro } from './auth/registro/registro';
import { Iniciosesion } from './auth/iniciosesion/iniciosesion';

// Creamos el arreglo de rutas.
// Angular lo utilizará para saber qué componente mostrar.
export const routes: Routes = [
    // Cuando la URL está vacía:
    // localhost:4200
    // redirige automáticamente a Inicio.
    { path: '', redirectTo: 'Inicio', pathMatch: 'full' },
    // Ruta para la página Inicio.
    { path: 'Inicio', component: Inicio },
    // Ruta para la página Contacto.
    { path: 'Contacto', component: Contacto },
    // Ruta para la página Ofertas.
    { path: 'Ofertas', component: Ofertas },
    { path: 'Productos', component: Productos },
    { path: 'Carrito', component: Carrito },
    { path: 'Favoritos', component: Favoritos },
    { path: 'Registro', component: Registro },
    { path: 'Iniciosesion', component: Iniciosesion },

    // Ruta comodín (**).
    // Si el usuario escribe una dirección incorrecta,
    // Angular lo envía automáticamente a Inicio.
    { path: '**', redirectTo: 'Inicio' },
];

//ruta: Una ruta es una dirección que Angular utiliza para mostrar un componente determinado.

//path: Indica la dirección que se escribe en la URL.

//component: Indica qué componente debe mostrarse cuando se accede a esa ruta.

//redirecto: Redirecciona automáticamente al usuario hacia otra ruta.

//  pathMatch: 'full';Significa que la URL debe estar completamente vacía para realizar la redirección.

// **: Es una ruta de seguridad. Si el usuario escribe una dirección que no existe, Angular lo envía
//  a Inicio.

//resumen: El archivo app.routes.ts administra la navegación de la aplicación. Define qué componente
//  se muestra en cada URL y también controla las redirecciones cuando una ruta no existe.