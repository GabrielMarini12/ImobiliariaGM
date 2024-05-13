import { catalogo, salvarLocalStorage } from "./utilidades";

export function pegarCurtida() {
  const arrayIds = [];
  for (const imovel of catalogo) {
    const curtida = document.getElementById(`curtida-${imovel.id}`);
    curtida.addEventListener("click", () => {
      if (imovel.curtida === false) {
        curtida.classList.add("text-red-500");
        imovel.curtida = true;
        arrayIds.push(imovel.id);
        salvarLocalStorage("idfavorito", JSON.stringify(arrayIds));
      } else {
        curtida.classList.remove("text-red-500");
        imovel.curtida = false;
        arrayIds.splice(arrayIds.indexOf(imovel.id), 1);
        salvarLocalStorage("idfavorito", JSON.stringify(arrayIds));
      }
    });
  }
}
