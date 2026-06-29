// Creamos una interfaz llamada Producto.
// Una interfaz sirve para definir qué datos
// debe tener obligatoriamente un producto.
export interface Producto {

    // Identificador único del producto.
    id:    number;
    nombre:  string;
    descripcion:  string;
    precio:    number;
    stock:    number;
    imagen:   string;
    categoria: string;
    disponibilidad:  boolean;
}


//models/productos.ts; Este archivo define cómo debe ser un producto dentro de la aplicación. Todos los
//productos deben tener las mismas propiedades para que Angular pueda trabajar con ellos correctamente.
//Es como una plantilla

//interfaz: Una interfaz es una estructura que indica qué datos debe tener un objeto.

//por que se creo el models: Creé el modelo Producto 
// para que todos los productos de la aplicación tengan la misma estructura

//El archivo productos.ts contiene la interfaz Producto. La utilicé para definir las propiedades que debe tener cada 
// producto de la tienda, como id, nombre, descripción, precio, stock, imagen, categoría y disponibilidad.