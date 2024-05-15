import{l as i,c as d,i as c,a as x}from"./utilidades-Cxstp-Gn.js";function m(){const t=i("idfavorito");for(const s of t)for(const a of d)if(a.id===s){const l=document.getElementById("container-produto-favorito"),e=document.createElement("div");e.classList.add("flex"),e.classList.add("flex-col"),e.classList.add("my-14");const o=`
                                                  <div class="flex">
                                                          <img
                                                          src="./assets/${a.imagem}"
                                                          alt="${a.nome}"
                                                          class="w-[735px]  h-[600px] ] lg:max-xl:w-[500px] lg:max-xl:h-[450px] md:max-lg:w-[400px] md:max-lg:h-[400px] rounded-lg mr-8 md:max-lg:mr-4 shadow-md shadow-zinc-900"
                                                          id="imagem-principal-${a.id}"
                                                          />
                                  
                                                      <div class="flex flex-col justify-between">
                                                        <div class="flex flex-col">
                                                          <p class="text-3xl font-bold uppercase md:max-lg:text-xl">${a.nome}</p>
                                                          <p class="text-orange-400 ">
                                                            ______________________________________
                                                          </p>
                                                        </div>
                                            
                                                        <p class="opacity-90 lg:max-xl:text-sm md:max-lg:text-sm">
                                                          ${a.descricaoCompleta}
                                                        </p>
                                                        
                                                        <div class="flex justify-between lg:max-xl:text-sm md:max-lg:text-sm md:max-lg:flex-col">
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
                                                          <p class="text-green-400 font-bold text-lg ">R$${a.preco}</p>
                                                           
                                                          
                                                          <i class="fa-solid fa-star text-yellow-400 text-xl hover:text-yellow-200 md:max-lg:text-sm"></i>
                                                          
                                                        </div>
                                                      </div>
                                                  </div>    
                                                  `;e.innerHTML=o,l.appendChild(e)}}c();m();x();
