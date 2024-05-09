import { catalogo } from "./src/utilidades";

function criarProdutos() {
  for (const produtosCatalogo of catalogo) {
    const produto = `
        <div
          class="flex flex-col w-full py-4 px-5 bg-zinc-500 rounded-lg group shadow-md shadow-zinc-900"
          id="card-imovel-${produtosCatalogo.id}"
        >
          <div class="mb-4">
            <img
            src="./assets/${produtosCatalogo.imagem}"
            alt="${produtosCatalogo.nome}"
            class="mb-4 shadow-zinc-950 shadow-lg rounded-lg group-hover:scale-105 duration-300 w-full h-[265px]"
            />
          </div>
          <div class="flex justify-between">
            <p class="text-lg font-bold">${produtosCatalogo.nome}</p>
            <button
                class="w-16 p-1 bg-slate-300 text-slate-700 rounded-xl border-none shadow-zinc-950 shadow-sm hover:shadow-none"
            >
                <i class="fa-solid fa-eye"></i>
            </button>
          </div>
          <p class="text-sm w-2/3 py-2 text-slate-300">
            ${produtosCatalogo.descricao}
            </p>
            <p class="text-sm text-green-400 font-bold">R$${produtosCatalogo.preco}</p>
        </div>
        `;

    document.getElementById("container-produtos").innerHTML += produto;
  }
}

criarProdutos();
