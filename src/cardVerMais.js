import { catalogo, lerLocalStorage } from "./utilidades";

export function cardVerMais() {
  for (const produtosCatalogo of catalogo) {
    if (lerLocalStorage("imovel") === produtosCatalogo.id) {
      const containerProdutoVerMais = document.getElementById(
        "container-produto-ver-mais"
      );

      const elementoImovel = document.createElement("div");
      elementoImovel.classList.add("flex");

      const cardImovel = `
                
                    <img
                      src="./assets/${produtosCatalogo.imagem}"
                      alt="${produtosCatalogo.nome}"
                      class="w-[735px]  h-[600px] lg:max-xl:w-[500px] lg:max-xl:h-[450px] md:max-lg:w-[390px] md:max-lg:h-[360px] rounded-lg mr-8 md:max-lg:mr-4 shadow-md shadow-zinc-900"
                      id="imagem-principal-${produtosCatalogo.id}"
                    />
                    <div class="flex flex-col justify-between">
                      <div class="flex flex-col">
                        <p class="text-3xl font-bold uppercase md:max-lg:text-xl">${produtosCatalogo.nome}</p>
                        <p class="text-orange-400">
                          ______________________________________
                        </p>
                      </div>
          
                      <p class="opacity-90 lg:max-xl:text-sm md:max-lg:text-sm">
                        ${produtosCatalogo.descricaoCompleta}
                      </p>
                      
                      <div class="flex justify-between lg:max-xl:text-sm md:max-lg:text-sm ">
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
                        <button
                          class="bg-green-800 px-2 py-1 rounded-lg shadow-md shadow-zinc-900 hover:shadow-none"
                          id="botao-whats-ver-mais"
                        >
                          Entrar em contato
                          <i class="fa-brands fa-whatsapp text-green-400"></i>
                        </button>
                      </div>
                    </div>
                
                `;

      elementoImovel.innerHTML = cardImovel;

      const elementoImovelSecundario = document.createElement("div");
      elementoImovelSecundario.classList.add("flex");
      elementoImovelSecundario.classList.add("gap-3");
      elementoImovelSecundario.classList.add("md:max-lg:gap-1");
      elementoImovelSecundario.classList.add("mt-2");

      const cardImovelSecundario = `
      <img
        src="./assets/${produtosCatalogo.imagem}"
          alt="${produtosCatalogo.nome}"
          class="w-[175px] lg:max-xl:w-[117px] lg:max-xl:h-[117px] md:max-lg:w-[95px] md:max-lg:h-[95px] rounded-lg cursor-pointer shadow-md shadow-zinc-900 opacity-30 hover:opacity-50"
          id="imagem-principal-1-${produtosCatalogo.id}"
      />
      <img
        src="./assets/${produtosCatalogo.imagem2}"
          alt="${produtosCatalogo.nome}"
          class="w-[175px] lg:max-xl:w-[117px] lg:max-xl:h-[117px] md:max-lg:w-[95px] md:max-lg:h-[95px] rounded-lg cursor-pointer shadow-md shadow-zinc-900 opacity-30 hover:opacity-50"
          id="imagem-secundaria-${produtosCatalogo.id}"
      />
      <img
        src="./assets/${produtosCatalogo.imagem3}"
          alt="${produtosCatalogo.nome}"
          class="w-[175px] lg:max-xl:w-[117px] lg:max-xl:h-[117px] md:max-lg:w-[95px] md:max-lg:h-[95px] rounded-lg cursor-pointer shadow-md shadow-zinc-900 opacity-30 hover:opacity-50"
          id="imagem-terciaria-${produtosCatalogo.id}"
      />
      <img
        src="./assets/${produtosCatalogo.imagem4}"
          alt="${produtosCatalogo.nome}"
          class="w-[175px] lg:max-xl:w-[117px] lg:max-xl:h-[117px] md:max-lg:w-[95px] md:max-lg:h-[95px] rounded-lg cursor-pointer shadow-md shadow-zinc-900 opacity-30 hover:opacity-50"
          id="imagem-quartenaria-${produtosCatalogo.id}"
      />
      `;

      elementoImovelSecundario.innerHTML = cardImovelSecundario;

      containerProdutoVerMais.appendChild(elementoImovel);
      containerProdutoVerMais.appendChild(elementoImovelSecundario);
    }
  }
}

// export function cardVerMais(idImovel) {
//   const imovel = catalogo.find((p) => p.id === idImovel);
//   const containerProdutoVerMais = document.getElementById(
//     "container-produto-ver-mais"
//   );

//   const elementoImovel = document.createElement("div");
//   elementoImovel.classList.add("flex");

//   const cardImovel = `
//     <div class="flex">
//             <img
//               src="./assets/${imovel.imagem}"
//               alt="${imovel.nome}"
//               class="w-[765px] rounded-lg mr-8 shadow-md shadow-zinc-900"
//             />
//             <div class="flex flex-col justify-between">
//               <div class="flex flex-col">
//                 <p class="text-3xl font-bold uppercase">${imovel.nome}</p>
//                 <p class="text-orange-400">
//                   ______________________________________
//                 </p>
//               </div>

//               <p class="mt-6">
//                 ${imovel.descricaoCompleta}
//               </p>

//               <div class="flex justify-between">
//                 <p class="text-green-400 font-bold">R$${imovel.preco}</p>
//                 <button
//                   class="bg-green-800 px-2 py-1 rounded-lg shadow-md shadow-zinc-900 hover:shadow-none"
//                 >
//                   Entrar em contato
//                   <i class="fa-brands fa-whatsapp text-green-400"></i>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div class="flex gap-2 mt-2">
//             <img
//               src="./assets/apto-sala.webp"
//               alt=""
//               class="w-[235px] rounded-lg cursor-pointer shadow-md shadow-zinc-900"
//             />
//             <img
//               src="./assets/apto-sacada.jpg"
//               alt=""
//               class="w-[235px] rounded-lg cursor-pointer shadow-md shadow-zinc-900"
//             />
//             <img
//               src="./assets/apto-restaurante.jpg"
//               alt=""
//               class="w-[235px] rounded-lg cursor-pointer shadow-md shadow-zinc-900"
//             />
//           </div>`;

//   elementoImovel.innerHTML = cardImovel;
//   containerProdutoVerMais.appendChild(elementoImovel);
// }
