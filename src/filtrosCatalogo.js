const catalogoImoveis = document.getElementById("container-produtos");

function mostrarTodos() {
  const imoveisEscondidos = Array.from(
    catalogoImoveis.getElementsByClassName("hidden")
  );

  for (const imovel of imoveisEscondidos) {
    imovel.classList.remove("hidden");
  }
}

function mostrarCasas() {
  mostrarTodos();
  const imoveisCasas = Array.from(
    catalogoImoveis.getElementsByClassName("apartamento")
  );

  for (const imovel of imoveisCasas) {
    imovel.classList.add("hidden");
  }
}

function mostrarApartamentos() {
  mostrarTodos();
  const imoveisApartamentos = Array.from(
    catalogoImoveis.getElementsByClassName("casa")
  );

  for (const imovel of imoveisApartamentos) {
    imovel.classList.add("hidden");
  }
}

export function iniciarFiltros() {
  document
    .getElementById("mostrar-todos")
    .addEventListener("click", mostrarTodos);

  document
    .getElementById("mostrar-casas")
    .addEventListener("click", mostrarCasas);

  document
    .getElementById("mostrar-apartamentos")
    .addEventListener("click", mostrarApartamentos);
}
