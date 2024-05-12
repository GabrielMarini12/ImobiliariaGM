import { catalogo } from "./utilidades";

export function pegarCurtida() {
  for (const imovel of catalogo) {
    const curtida = document.getElementById(`curtida-${imovel.id}`);
    curtida.addEventListener("click", () => {
      if (imovel.curtida === false) {
        curtida.classList.add("text-red-500");
        imovel.curtida = true;
      } else {
        curtida.classList.remove("text-red-500");
        imovel.curtida = false;
      }
    });
  }
}
