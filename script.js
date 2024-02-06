function calcularPercentReticulocito() {
  const reticulocitos1000 = parseFloat(document.getElementById("reticulocitos1000").value);

  const percentReticulocito = (reticulocitos1000 / 10)

  document.getElementById("percentReticulocito").value = percentReticulocito.toFixed(1);
}

function calcularReticulocitos() {
  const hemaciasTotais = parseFloat(document.getElementById("hemaciasTotais").value);
  const percentReticulocito = parseFloat(document.getElementById("percentReticulocito").value);

  const reticulocitos = percentReticulocito * (hemaciasTotais * 10000 );

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "<h3 class='text-lg font-semibold mb-2'>Resultado:</h3>" +
    "<p class='text-gray-700'>Reticulócitos absolutos: " + reticulocitos.toFixed(0) + "</p>" + 
    "<p class='text-gray-700'>Reticulócitos relativos: " + percentReticulocito.toFixed(1) +"%</p>";
}