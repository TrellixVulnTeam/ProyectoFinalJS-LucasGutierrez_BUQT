let listaObjetos;

if (localStorage.getItem("lista") == null) {
  const listaP = document.createElement("h2");
  listaP.textContent = "No hay productos disponibles";
  document.getElementById("crearProductos").appendChild(listaP);

  listaObjetos = [];
} else {
  listaObjetos = JSON.parse(localStorage.getItem("lista"));
  listaObjetos.forEach((element) => {
    const listaP = document.createElement("div");
    const listaPN = document.createElement("p");
    listaPN.textContent = element.nombre;
    listaP.appendChild(listaPN);
    const listaPC = document.createElement("p");
    listaPC.textContent = element.categoria;
    listaP.appendChild(listaPC);
    const listaPG = document.createElement("p");
    listaPG.textContent = element.genero;
    listaP.appendChild(listaPG);
    const listaPP = document.createElement("p");
    listaPP.textContent = element.precio;
    listaP.appendChild(listaPP);
    const listaPS = document.createElement("p");
    listaPS.textContent = element.stock;
    listaP.appendChild(listaPS);

    document.getElementById("crearProductos").appendChild(listaP);
  });
}
