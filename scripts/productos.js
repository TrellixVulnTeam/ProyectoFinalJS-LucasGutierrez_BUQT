let listaObjetos;

//Función para generar los productos en el HTML

let funcionCrearCard = (lista) => {
  lista.forEach((element) => {
    const listaPA = document.createElement("div");
    listaPA.setAttribute("class", "col-4");
    listaPA.setAttribute("style", "width: 18rem;");

    const listaP = document.createElement("div");
    listaP.setAttribute("class", "card-body");

    const listaPN = document.createElement("h5");
    listaPN.setAttribute("class", "card-title");
    listaPN.textContent = element.nombre;
    listaP.appendChild(listaPN);

    const listaPC = document.createElement("h6");
    listaPC.setAttribute("class", "card-subtitle");
    listaPC.setAttribute("class", "mb-2");
    listaPC.setAttribute("class", "text-muted");
    listaPC.textContent = element.categoria;
    listaP.appendChild(listaPC);

    const listaPG = document.createElement("h6");
    listaPG.setAttribute("class", "card-subtitle");
    listaPG.setAttribute("class", "mb-2");
    listaPG.setAttribute("class", "text-muted");
    listaPG.textContent = element.genero;
    listaP.appendChild(listaPG);

    const listaPP = document.createElement("h6");
    listaPP.setAttribute("class", "card-subtitle");
    listaPP.setAttribute("class", "mb-2");
    listaPP.setAttribute("class", "text-muted");
    listaPP.textContent = element.precio;
    listaP.appendChild(listaPP);

    const listaPS = document.createElement("h6");
    listaPS.setAttribute("class", "card-subtitle");
    listaPS.setAttribute("class", "mb-2");
    listaPS.setAttribute("class", "text-muted");
    listaPS.textContent = element.stock;
    listaP.appendChild(listaPS);

    const listaBoton = document.createElement("button");
    listaBoton.setAttribute("id", "boton");
    listaBoton.textContent = "COMPRAR";
    listaP.appendChild(listaBoton);

    listaPA.appendChild(listaP);

    document.getElementById("crearProductos").appendChild(listaPA);
  });
};

//Fin función para generar los productos en el HTML

//Funcion para imprimir los productos cargados en el backoffice

let funcionImprimirProducto = () => {
  if (localStorage.getItem("lista") == null) {
    const listaP = document.createElement("h2");
    listaP.textContent = "No hay productos disponibles";
    document.getElementById("crearProductos").appendChild(listaP);
    listaObjetos = [];
  } else {
    listaObjetos = JSON.parse(localStorage.getItem("lista"));
    funcionCrearCard(listaObjetos);
  }
};

//Fin funcion para imprimir los productos cargados en el backoffice

//Funcion para filtrar productos

let listaFiltrada;

let dato;

let funcionFiltrarPorNombre = (lista) => {
  dato = document.getElementsByTagName("select")[0].value;
  if (dato === "ninguno") {
    funcionImprimirProducto();
  } else {
    listaFiltrada = lista.filter((element) => element.nombre === dato);
    if (listaFiltrada.length != 0) {
      funcionCrearCard(listaFiltrada);
    } else {
      const listaP = document.createElement("h2");
      listaP.textContent = "No hay productos disponibles";
      document.getElementById("crearProductos").appendChild(listaP);
    }
  }
};

//Fin funcion para filtrar productos

//funcion comprar, validamos si carrito esta vacio: inicializamos en 0; si hay archivos en el localstorage "carrito" lo traemos
/*const comprar = (dato) => {
  let carrito;

  if (localStorage.getItem("carrito") == null) {
    carrito = [];
  } else {
    carrito = JSON.parse(localStorage.getItem("carrito"));
  }

  carrito.push(dato);
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

*/

//Llamada a funciones

funcionImprimirProducto(listaObjetos);

const botonFiltrar = document.getElementsByTagName("button")[2];

botonFiltrar.addEventListener("click", () => {
  funcionFiltrarPorNombre();
});
