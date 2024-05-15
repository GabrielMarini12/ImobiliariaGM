import{c as s,s as a,i as r,a as n}from"./utilidades-Cxstp-Gn.js";function c(){for(const t of s){const o=`
          <div
            class="flex flex-col w-full py-4 px-5 bg-zinc-500 rounded-lg group shadow-md shadow-zinc-900 ${t.imovel}"
            id="card-imovel-${t.id}"
          >
            <div class="mb-4">
              <img
              src="./assets/${t.imagem}"
              alt="${t.nome}"
              class="mb-4 shadow-zinc-950 shadow-lg rounded-lg group-hover:scale-105 duration-300 w-full h-[280px]"
              />
            </div>
            <div class="flex justify-between">
              <p class="text-lg font-bold">${t.nome}</p>
              <button id="ver-mais-produto-${t.id}"
                  class="w-16 p-1 bg-slate-300 text-slate-700 rounded-xl border-none shadow-zinc-950 shadow-sm hover:shadow-none"
              >
                  <i class="fa-solid fa-eye"></i>
              </button>
            </div>
            <p class="text-sm w-2/3 py-2 text-slate-200 opacity-80">
              ${t.descricao}
            </p>
            <div class="flex justify-between">
              <p class="text-md text-green-400 font-bold">R$${t.preco}</p>
              <button id="curtida-${t.id}" class="hover:text-red-200 duration-200">
                <i class="fa-solid fa-heart cursor-pointer pr-2 "></i>
              </button>
            </div>
          </div>
          `;document.getElementById("container-produtos").innerHTML+=o}for(const t of s){let o=function(){a("imovel",`${t.id}`),window.location.href="./verMais.html"};document.getElementById(`ver-mais-produto-${t.id}`).addEventListener("click",()=>o())}}function l(){const t=[];for(const o of s){const e=document.getElementById(`curtida-${o.id}`);e.addEventListener("click",()=>{o.curtida===!1?(e.classList.add("text-red-500"),o.curtida=!0,t.push(o.id),a("idfavorito",JSON.stringify(t))):(e.classList.remove("text-red-500"),o.curtida=!1,t.splice(t.indexOf(o.id),1),a("idfavorito",JSON.stringify(t)))})}}const i=document.getElementById("container-produtos");function d(){const t=Array.from(i.getElementsByClassName("hidden"));for(const o of t)o.classList.remove("hidden")}function m(){d();const t=Array.from(i.getElementsByClassName("apartamento"));for(const o of t)o.classList.add("hidden")}function u(){d();const t=Array.from(i.getElementsByClassName("casa"));for(const o of t)o.classList.add("hidden")}function f(){document.getElementById("mostrar-todos").addEventListener("click",d),document.getElementById("mostrar-casas").addEventListener("click",m),document.getElementById("mostrar-apartamentos").addEventListener("click",u)}c();f();r();l();n();
