window.onload = function() {
  
 
var elementoDataAtual = document.getElementById("data-atual");

  var data = new Date();
  
 
var dia = data.getDate();
  
 
var mes = data.getMonth() + 1; // Janeiro é representado pelo valor 0
  
 
var ano = data.getFullYear();

  

 


var dataFormatada = dia + "/" + mes + "/" + ano;

  elementoDataAtual.innerHTML = "Data atual: " + dataFormatada;
};