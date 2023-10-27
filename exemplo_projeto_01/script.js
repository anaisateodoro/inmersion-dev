let labelNombre = document.createElement("label");
labelNombre.textContent = "Inserta tu nombre";
labelNombre.classList.add("label");

let inputNombre = document.createElement("input");
inputNombre.type = "text";
inputNombre.classList.add("input");

let labelValor = document.createElement("label");
labelValor.textContent = "Ingresa un valor en reales brasileños";
labelValor.classList.add("label");

let inputValor = document.createElement("input");
inputValor.type = "text";
inputValor.classList.add("input");

let boton = document.createElement("input");
boton.type = "submit";
boton.value = "Convertir";
boton.classList.add("boton");

let salida = document.createElement("p");
salida.classList.add("salida");

let div = document.createElement("form");
div.classList.add("div");
div.appendChild(labelNombre);
div.appendChild(inputNombre);
div.appendChild(labelValor);
div.appendChild(inputValor);
div.appendChild(boton);
div.appendChild(salida);

document.body.appendChild(div);

boton.addEventListener("click", conversionDeMoneda);

function conversionDeMoneda(e) {
  e.preventDefault();

  if (inputNombre.value === "" || inputValor.value === "") {
    salida.textContent = "Debes insertar nombre y número";
  } else {
    let valorPasajeDolares = inputValor.value;

    let valorDolarReales = 5.0049;

    // Realizar la conversión de dólares a reales brasileños y redondear el resultado a 2 decimales
    let conversionAReales = (valorPasajeDolares * valorDolarReales) / 1;
    conversionAReales = conversionAReales.toFixed(2);

    salida.textContent = `Hola ${inputNombre.value}, la conversion es $${conversionAReales}`;
  }
}
