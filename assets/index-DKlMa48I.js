(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const r=[{id:"1",nome:"Casa 1",preco:"1.399,000",imagem:"casa1.jpg",imagem2:"casa1-sala-jantar.webp",imagem3:"apto-sala.webp",imagem4:"apto-restaurante.jpg",descricao:"Casa de alto padrão, 3 quartos, sendo 1 com suíte e mais 2 banheiros. Área externa com piscina e vaga para 2 carros na garagem fechada.",descricaoCompleta:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, rerum eum! Itaque ea dicta recusandae sint nam accusamus, aliquamassumenda velit, voluptatem soluta quaerat magnam distinctio minusnisi maiores! Minus labore non cupiditate adipisci nam suscipit recusandae aliquam magni optio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, architecto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero qui, atdignissimos accusantium veniam inventore neque exercitationem impedit quia voluptatibus!",imovel:"casa",quarto:"3",vagas:"2",banheiro:"4",metros:"123",curtida:!1},{id:"2",nome:"Casa 2",preco:"980.000",imagem:"casa2.jpg",imagem2:"casa2-quarto.webp",imagem3:"casa1-sala-jantar.webp",imagem4:"casa4-sala.webp",descricao:"Casa de alto padrão, 3 quartos, sendo 1 com suíte e mais 2 banheiros. Área externa com piscina e vaga para 2 carros na garagem fechada.",descricaoCompleta:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, rerum eum! Itaque ea dicta recusandae sint nam accusamus, aliquamassumenda velit, voluptatem soluta quaerat magnam distinctio minusnisi maiores! Minus labore non cupiditate adipisci nam suscipit recusandae aliquam magni optio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, architecto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero qui, atdignissimos accusantium veniam inventore neque exercitationem impedit quia voluptatibus!",imovel:"casa",quarto:"2",vagas:"2",banheiro:"2",metros:"96",curtida:!1},{id:"3",nome:"Apartamento",preco:"600.000",imagem:"apto.webp",imagem2:"apto-sala.webp",imagem3:"apto-sacada.jpg",imagem4:"apto-restaurante.jpg",descricao:"Apartamento de alto padrão, 3 quartos, sendo 1 com suíte e mais 2 banheiros. Área externa com piscina e vaga para 1 carro na garagem fechada.",descricaoCompleta:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, rerum eum! Itaque ea dicta recusandae sint nam accusamus, aliquamassumenda velit, voluptatem soluta quaerat magnam distinctio minusnisi maiores! Minus labore non cupiditate adipisci nam suscipit recusandae aliquam magni optio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, architecto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero qui, atdignissimos accusantium veniam inventore neque exercitationem impedit quia voluptatibus!",imovel:"apartamento",quarto:"2",vagas:"1",banheiro:"2",metros:"88",curtida:!1},{id:"4",nome:"Apartamento Cobertura",preco:"1.400.000",imagem:"apto1-cobertura.jpg",imagem2:"apto1-quarto.jpg",imagem3:"apto-sala.webp",imagem4:"apto-restaurante.jpg",descricao:"Apartamento de alto padrão, 3 quartos, sendo 1 com suíte e mais 2 banheiros. Área externa com piscina e vaga para 1 carro na garagem fechada.",descricaoCompleta:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, rerum eum! Itaque ea dicta recusandae sint nam accusamus, aliquamassumenda velit, voluptatem soluta quaerat magnam distinctio minusnisi maiores! Minus labore non cupiditate adipisci nam suscipit recusandae aliquam magni optio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, architecto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero qui, atdignissimos accusantium veniam inventore neque exercitationem impedit quia voluptatibus!",imovel:"apartamento",quarto:"3",vagas:"1",banheiro:"3",metros:"116",curtida:!1},{id:"5",nome:"Casa 3",preco:"800.000",imagem:"casa3.jpg",imagem2:"casa3-banheiro.webp",imagem3:"casa4-piscina.webp",imagem4:"casa4-sala.webp",descricao:"Casa de alto padrão, 3 quartos, sendo 1 com suíte e mais 2 banheiros. Área externa com piscina e vaga para 2 carros na garagem fechada.",descricaoCompleta:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, rerum eum! Itaque ea dicta recusandae sint nam accusamus, aliquamassumenda velit, voluptatem soluta quaerat magnam distinctio minusnisi maiores! Minus labore non cupiditate adipisci nam suscipit recusandae aliquam magni optio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, architecto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero qui, atdignissimos accusantium veniam inventore neque exercitationem impedit quia voluptatibus!",imovel:"casa",quarto:"2",vagas:"2",banheiro:"2",metros:"99",curtida:!1},{id:"6",nome:"Casa 4",preco:"1.800,000",imagem:"casa4.webp",imagem2:"casa4-sala.webp",imagem3:"casa4-piscina.webp",imagem4:"casa3-banheiro.webp",descricao:"Casa de alto padrão, 3 quartos, sendo 1 com suíte e mais 2 banheiros. Área externa com piscina e vaga para 2 carros na garagem fechada.",descricaoCompleta:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A, rerum eum! Itaque ea dicta recusandae sint nam accusamus, aliquamassumenda velit, voluptatem soluta quaerat magnam distinctio minusnisi maiores! Minus labore non cupiditate adipisci nam suscipit recusandae aliquam magni optio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, architecto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero qui, atdignissimos accusantium veniam inventore neque exercitationem impedit quia voluptatibus!",imovel:"casa",quarto:"4",vagas:"2",banheiro:"4",metros:"126",curtida:!1}];function c(e,a){localStorage.setItem(e,JSON.stringify(a))}function m(e){return JSON.parse(localStorage.getItem(e))}function l(){const e=document.getElementById("botao-whats"),a=document.getElementById("botao-whats-ver-mais");e.addEventListener("click",()=>{const t=encodeURIComponent("Olá, gostaira de ser atendido por um especialista.");window.open(`https://wa.me/5551993629999?text=${t}`,"_blank")}),a.addEventListener("click",()=>{for(const t of r)if(m("imovel")===t.id){const s=encodeURIComponent(`Olá, gostaira de mais informações sobre o imóvel - ${t.nome}.`);window.open(`https://wa.me/5551993629999?text=${s}`,"_blank")}})}function p(){document.getElementById("botao-favoritos").addEventListener("click",()=>{if(!m("idfavorito")||m("idfavorito")==="[]"){alert("Você não tem nenhum imóvel adicionado aos favoritos.");return}else window.location.href="./favoritos.html"})}function g(){for(const a of r){const t=`
          <div
            class="flex flex-col w-full py-4 px-5 bg-zinc-500 rounded-lg group shadow-md shadow-zinc-900 ${a.imovel}"
            id="card-imovel-${a.id}"
          >
            <div class="mb-4">
              <img
              src="./assets/${a.imagem}"
              alt="${a.nome}"
              class="mb-4 shadow-zinc-950 shadow-lg rounded-lg group-hover:scale-105 duration-300 w-full h-[280px]"
              />
            </div>
            <div class="flex justify-between">
              <p class="text-lg font-bold">${a.nome}</p>
              <button id="ver-mais-produto-${a.id}"
                  class="w-16 p-1 bg-slate-300 text-slate-700 rounded-xl border-none shadow-zinc-950 shadow-sm hover:shadow-none"
              >
                  <i class="fa-solid fa-eye"></i>
              </button>
            </div>
            <p class="text-sm w-2/3 py-2 text-slate-200 opacity-80">
              ${a.descricao}
            </p>
            <div class="flex justify-between">
              <p class="text-md text-green-400 font-bold">R$${a.preco}</p>
              <button id="curtida-${a.id}" class="hover:text-red-200 duration-200">
                <i class="fa-solid fa-heart cursor-pointer pr-2 "></i>
              </button>
            </div>
          </div>
          `;document.getElementById("container-produtos").innerHTML+=t}for(const a of r){let t=function(){c("imovel",`${a.id}`),window.location.href="./verMais.html"};var e=t;document.getElementById(`ver-mais-produto-${a.id}`).addEventListener("click",()=>t())}}function f(){const e=[];for(const a of r){const t=document.getElementById(`curtida-${a.id}`);t.addEventListener("click",()=>{a.curtida===!1?(t.classList.add("text-red-500"),a.curtida=!0,e.push(a.id),c("idfavorito",JSON.stringify(e))):(t.classList.remove("text-red-500"),a.curtida=!1,e.splice(e.indexOf(a.id),1),c("idfavorito",JSON.stringify(e)))})}}const u=document.getElementById("container-produtos");function d(){const e=Array.from(u.getElementsByClassName("hidden"));for(const a of e)a.classList.remove("hidden")}function v(){d();const e=Array.from(u.getElementsByClassName("apartamento"));for(const a of e)a.classList.add("hidden")}function b(){d();const e=Array.from(u.getElementsByClassName("casa"));for(const a of e)a.classList.add("hidden")}function h(){document.getElementById("mostrar-todos").addEventListener("click",d),document.getElementById("mostrar-casas").addEventListener("click",v),document.getElementById("mostrar-apartamentos").addEventListener("click",b)}g();h();p();f();l();