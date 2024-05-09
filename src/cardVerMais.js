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
                      class="w-[730px] min-w-[730px] max-w-[730px] h-[600px] min-h-[600px] max-h-[600px] rounded-lg mr-8 shadow-md shadow-zinc-900"
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
                        <p class="text-green-400 font-bold">R$${produtosCatalogo.preco}</p>
                        <button
                          class="bg-green-800 px-2 py-1 rounded-lg shadow-md shadow-zinc-900 hover:shadow-none"
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
      elementoImovelSecundario.classList.add("mt-2");

      const cardImovelSecundario = `
      <img
        src="./assets/${produtosCatalogo.imagem2}"
          alt="${produtosCatalogo.nome}"
          class="w-[235px] min-w-[235px] max-w-[235px] h-[200px] rounded-lg cursor-pointer shadow-md shadow-zinc-900"
      />
      <img
        src="./assets/${produtosCatalogo.imagem3}"
          alt="${produtosCatalogo.nome}"
          class="w-[235px] min-w-[235px] max-w-[235px] rounded-lg cursor-pointer shadow-md shadow-zinc-900"
      />
      <img
        src="./assets/${produtosCatalogo.imagem4}"
          alt="${produtosCatalogo.nome}"
          class="w-[235px] min-w-[235px] max-w-[235px] rounded-lg cursor-pointer shadow-md shadow-zinc-900"
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
