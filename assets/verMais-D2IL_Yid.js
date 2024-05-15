import{c as o,l as d,m,i as x,a as c}from"./utilidades-Cxstp-Gn.js";function r(){for(const a of o)if(d("imovel")===a.id){const l=document.getElementById("container-produto-ver-mais"),s=document.createElement("div");s.classList.add("flex");const t=`
                
                    <img
                      src="./assets/${a.imagem}"
                      alt="${a.nome}"
                      class="w-[735px]  h-[600px] lg:max-xl:w-[500px] lg:max-xl:h-[450px] md:max-lg:w-[390px] md:max-lg:h-[360px] rounded-lg mr-8 md:max-lg:mr-4 shadow-md shadow-zinc-900"
                      id="imagem-principal-${a.id}"
                    />
                    <div class="flex flex-col justify-between">
                      <div class="flex flex-col">
                        <p class="text-3xl font-bold uppercase md:max-lg:text-xl">${a.nome}</p>
                        <p class="text-orange-400">
                          ______________________________________
                        </p>
                      </div>
          
                      <p class="opacity-90 lg:max-xl:text-sm md:max-lg:text-sm">
                        ${a.descricaoCompleta}
                      </p>
                      
                      <div class="flex justify-between lg:max-xl:text-sm md:max-lg:text-sm ">
                        <div class="flex gap-2 items-center">
                          <i class="fa-solid fa-bed text-orange-400"></i>
                          <p>${a.quarto} quartos</p>
                        </div>

                        <div class="flex gap-2 items-center">
                          <i class="fa-solid fa-car text-orange-400"></i>
                          <p>${a.vagas} vagas</p>
                        </div>

                        <div class="flex gap-2 items-center">
                          <i class="fa-solid fa-bath text-orange-400"></i>
                          <p>${a.banheiro} banheiros</p>
                        </div>

                        <div class="flex gap-2 items-center">
                          <i class="fa-solid fa-up-down-left-right text-orange-400"></i>
                          <p>${a.metros}m²</p>
                        </div>
                      </div>
          
                      <div class="flex justify-between">
                        <p class="text-green-400 font-bold text-lg">R$${a.preco}</p>
                        <button
                          class="bg-green-800 px-2 py-1 rounded-lg shadow-md shadow-zinc-900 hover:shadow-none"
                          id="botao-whats-ver-mais"
                        >
                          Entrar em contato
                          <i class="fa-brands fa-whatsapp text-green-400"></i>
                        </button>
                      </div>
                    </div>
                
                `;s.innerHTML=t;const e=document.createElement("div");e.classList.add("flex"),e.classList.add("gap-3"),e.classList.add("md:max-lg:gap-1"),e.classList.add("mt-2");const i=`
      <img
        src="./assets/${a.imagem}"
          alt="${a.nome}"
          class="w-[175px] lg:max-xl:w-[117px] lg:max-xl:h-[117px] md:max-lg:w-[95px] md:max-lg:h-[95px] rounded-lg cursor-pointer shadow-md shadow-zinc-900 opacity-30 hover:opacity-50"
          id="imagem-principal-1-${a.id}"
      />
      <img
        src="./assets/${a.imagem2}"
          alt="${a.nome}"
          class="w-[175px] lg:max-xl:w-[117px] lg:max-xl:h-[117px] md:max-lg:w-[95px] md:max-lg:h-[95px] rounded-lg cursor-pointer shadow-md shadow-zinc-900 opacity-30 hover:opacity-50"
          id="imagem-secundaria-${a.id}"
      />
      <img
        src="./assets/${a.imagem3}"
          alt="${a.nome}"
          class="w-[175px] lg:max-xl:w-[117px] lg:max-xl:h-[117px] md:max-lg:w-[95px] md:max-lg:h-[95px] rounded-lg cursor-pointer shadow-md shadow-zinc-900 opacity-30 hover:opacity-50"
          id="imagem-terciaria-${a.id}"
      />
      <img
        src="./assets/${a.imagem4}"
          alt="${a.nome}"
          class="w-[175px] lg:max-xl:w-[117px] lg:max-xl:h-[117px] md:max-lg:w-[95px] md:max-lg:h-[95px] rounded-lg cursor-pointer shadow-md shadow-zinc-900 opacity-30 hover:opacity-50"
          id="imagem-quartenaria-${a.id}"
      />
      `;e.innerHTML=i,l.appendChild(s),l.appendChild(e)}}r();m();x();c();
