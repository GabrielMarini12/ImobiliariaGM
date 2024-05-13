import { catalogo, lerLocalStorage } from "./utilidades";

export function cardFavorito() {
  const ids = [];
  const historicoFavoritos = lerLocalStorage("idfavorito");

  for (const id of historicoFavoritos) {
    ids.push(id);
    for (const produtosCatalogo of catalogo) {
      if (produtosCatalogo.id === id) {
        const containerProdutoFavorito = document.getElementById(
          "container-produto-favorito"
        );

        const elementoImovel = document.createElement("div");
        elementoImovel.classList.add("flex");
        elementoImovel.classList.add("flex-col");
        elementoImovel.classList.add("my-10");

        const cardImovel = `
                                                  <div class="flex">
                                                          <img
                                                          src="./assets/${produtosCatalogo.imagem}"
                                                          alt="${produtosCatalogo.nome}"
                                                          class="w-[735px] min-w-[735px] max-w-[735px] h-[600px] min-h-[600px] max-h-[600px] rounded-lg mr-8 shadow-md shadow-zinc-900"
                                                          id="imagem-principal-${produtosCatalogo.id}"
                                                          />
                                  
                                                      <div class="flex flex-col justify-between">
                                                        <div class="flex flex-col">
                                                          <p class="text-3xl font-bold uppercase">${produtosCatalogo.nome}</p>
                                                          <p class="text-orange-400">
                                                            ______________________________________
                                                          </p>
                                                        </div>
                                            
                                                        <p class="opacity-90">
                                                          ${produtosCatalogo.descricaoCompleta}
                                                        </p>
                                                        
                                                        <div class="flex justify-between">
                                                          <div class="flex gap-2 items-center">
                                                            <i class="fa-solid fa-bed text-orange-400"></i>
                                                            <p>${produtosCatalogo.quarto} quartos</p>
                                                          </div>
                                  
                                                          <div class="flex gap-2 items-center">
                                                            <i class="fa-solid fa-car text-orange-400"></i>
                                                            <p>${produtosCatalogo.vagas} vagas</p>
                                                          </div>
                                  
                                                          <div class="flex gap-2 items-center">
                                                            <i class="fa-solid fa-bath text-orange-400"></i>
                                                            <p>${produtosCatalogo.banheiro} banheiros</p>
                                                          </div>
                                  
                                                          <div class="flex gap-2 items-center">
                                                            <i class="fa-solid fa-up-down-left-right text-orange-400"></i>
                                                            <p>${produtosCatalogo.metros}m²</p>
                                                          </div>
                                                        </div>
                                            
                                                        <div class="flex justify-between">
                                                          <p class="text-green-400 font-bold text-lg">R$${produtosCatalogo.preco}</p>
                                                           
                                                          
                                                          <i class="fa-solid fa-star text-yellow-400 text-xl hover:text-yellow-200"></i>
                                                          
                                                        </div>
                                                      </div>
                                                  </div>    
                                                  `;

        elementoImovel.innerHTML = cardImovel;
        containerProdutoFavorito.appendChild(elementoImovel);
      }
    }
  }
}
