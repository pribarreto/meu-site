function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmReal = parseFloat(valor);
  var valorEmPesoArgentino = valorEmReal * 27.06;
  
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "O Resultado em Peso argentino é $ " + valorEmPesoArgentino;
  elementoValorConvertido.innerHTML = valorConvertido;

  console.log(valorEmPesoArgentino);
}
