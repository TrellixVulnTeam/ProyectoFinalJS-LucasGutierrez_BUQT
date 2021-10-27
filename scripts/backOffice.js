//Clase producto

class Producto {
    constructor({ nombre, categoria, genero, precio, stock }) {
      this.nombre = nombre;
      this.categoria = categoria;
      this.genero = genero;
      this.precio = precio;
      this.stock = stock;
    }
  }
  
  //crear array para guardar productos
  
  let listaProductos;
  
  //condicional: si lista=null, la inicializa en cero, sino, le carga lo que esta guardado en el local storage
  
  if (localStorage.getItem("lista") == null) {
    listaProductos = [];
  } else {
    listaProductos = JSON.parse(localStorage.getItem("lista"));
  }
  
  //"funcion factory" para crear productos
  
  const crearProducto = () => {
    const producto = new Producto({
      nombre: document.querySelectorAll("select")[0].value,
      categoria: document.querySelectorAll("select")[1].value,
      genero: document.querySelectorAll("select")[2].value,
      precio: document.querySelectorAll("input")[1].value,
      stock: document.querySelectorAll("input")[2].value,
    });
    return producto;
  };
  
  //carga de productos
  
  const cargar = () => {
    listaProductos.push(crearProducto());
    localStorage.setItem("lista", JSON.stringify(listaProductos));
  };
  
  const limpiar = () => {
    localStorage.clear("lista");
  };
  
  const botonCargar = document.getElementsByTagName("button")[2];
  
  const botonLimpiar = document.getElementsByTagName("button")[4];
  
  botonCargar.onclick = () => {
    cargar();
  };
  
  botonLimpiar.onclick = () => {
    limpiar();
  };