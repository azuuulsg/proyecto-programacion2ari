import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Contacto } from './paginas/contacto/contacto';
import { Ofertas } from './paginas/ofertas/ofertas';
import { Productos } from './paginas/productos/productos';
import { Carrito } from './compartidos/carrito/carrito';
import { Favoritos } from './compartidos/favoritos/favoritos';
import { Registro } from './auth/registro/registro';
import { Iniciosesion } from './auth/iniciosesion/iniciosesion';

export const routes: Routes = [
    { path:'', redirectTo: 'Inicio', pathMatch: 'full'},

    { path: 'Inicio', component: Inicio},
    { path: 'Contacto', component: Contacto},
    { path: 'Ofertas', component: Ofertas},
    { path: 'Productos', component: Productos},
    { path: 'Carrito', component: Carrito},
    { path: 'Favoritos', component: Favoritos},
    { path: 'Registro', component: Registro},
    { path: 'Iniciosesion', component: Iniciosesion},


    {path: '**', redirectTo: 'Inicio'},
];
