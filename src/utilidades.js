export const catalogo = [
  {
    id: "1",
    nome: "Casa 1",
    preco: "1.399,000",
    imagem: "casa1.jpg",
    imagem2: "casa1-sala-jantar.webp",
    imagem3: "apto-sala.webp",
    imagem4: "apto-restaurante.jpg",
    descricao:
      "Casa de alto padrão, 3 quartos, sendo 1 com suíte e mais 2 banheiros. Área externa com piscina e vaga para 2 carros na garagem fechada.",
    descricaoCompleta:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, rerum eum! Itaque ea dicta recusandae sint nam accusamus, aliquamassumenda velit, voluptatem soluta quaerat magnam distinctio minusnisi maiores! Minus labore non cupiditate adipisci nam suscipit recusandae aliquam magni optio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, architecto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero qui, atdignissimos accusantium veniam inventore neque exercitationem impedit quia voluptatibus!",
    imovel: "casa",
  },
  {
    id: "2",
    nome: "Casa 2",
    preco: "980.000",
    imagem: "casa2.jpg",
    imagem2: "casa2-quarto.webp",
    imagem3: "casa1-sala-jantar.webp",
    imagem4: "casa4-sala.webp",
    descricao:
      "Casa de alto padrão, 3 quartos, sendo 1 com suíte e mais 2 banheiros. Área externa com piscina e vaga para 2 carros na garagem fechada.",
    descricaoCompleta:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, rerum eum! Itaque ea dicta recusandae sint nam accusamus, aliquamassumenda velit, voluptatem soluta quaerat magnam distinctio minusnisi maiores! Minus labore non cupiditate adipisci nam suscipit recusandae aliquam magni optio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, architecto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero qui, atdignissimos accusantium veniam inventore neque exercitationem impedit quia voluptatibus!",
    imovel: "casa",
  },
  {
    id: "3",
    nome: "Apartamento",
    preco: "600.000",
    imagem: "apto.webp",
    imagem2: "apto-sala.webp",
    imagem3: "apto-sacada.jpg",
    imagem4: "apto-restaurante.jpg",
    descricao:
      "Apartamento de alto padrão, 3 quartos, sendo 1 com suíte e mais 2 banheiros. Área externa com piscina e vaga para 1 carro na garagem fechada.",
    descricaoCompleta:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, rerum eum! Itaque ea dicta recusandae sint nam accusamus, aliquamassumenda velit, voluptatem soluta quaerat magnam distinctio minusnisi maiores! Minus labore non cupiditate adipisci nam suscipit recusandae aliquam magni optio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, architecto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero qui, atdignissimos accusantium veniam inventore neque exercitationem impedit quia voluptatibus!",
    imovel: "apartamento",
  },
  {
    id: "4",
    nome: "Apartamento Cobertura",
    preco: "1.400.000",
    imagem: "apto1-cobertura.jpg",
    imagem2: "apto1-quarto.jpg",
    imagem3: "apto-sala.webp",
    imagem4: "apto-restaurante.jpg",
    descricao:
      "Apartamento de alto padrão, 3 quartos, sendo 1 com suíte e mais 2 banheiros. Área externa com piscina e vaga para 1 carro na garagem fechada.",
    descricaoCompleta:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, rerum eum! Itaque ea dicta recusandae sint nam accusamus, aliquamassumenda velit, voluptatem soluta quaerat magnam distinctio minusnisi maiores! Minus labore non cupiditate adipisci nam suscipit recusandae aliquam magni optio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, architecto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero qui, atdignissimos accusantium veniam inventore neque exercitationem impedit quia voluptatibus!",
    imovel: "apartamento",
  },
  {
    id: "5",
    nome: "Casa 3",
    preco: "800.000",
    imagem: "casa3.jpg",
    imagem2: "casa3-banheiro.webp",
    imagem3: "casa4-piscina.webp",
    imagem4: "casa4-sala.webp",
    descricao:
      "Casa de alto padrão, 3 quartos, sendo 1 com suíte e mais 2 banheiros. Área externa com piscina e vaga para 2 carros na garagem fechada.",
    descricaoCompleta:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, rerum eum! Itaque ea dicta recusandae sint nam accusamus, aliquamassumenda velit, voluptatem soluta quaerat magnam distinctio minusnisi maiores! Minus labore non cupiditate adipisci nam suscipit recusandae aliquam magni optio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, architecto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero qui, atdignissimos accusantium veniam inventore neque exercitationem impedit quia voluptatibus!",
    imovel: "casa",
  },
  {
    id: "6",
    nome: "Casa 4",
    preco: "1.800,000",
    imagem: "casa4.webp",
    imagem2: "casa4-sala.webp",
    imagem3: "casa4-piscina.webp",
    imagem4: "casa3-banheiro.webp",
    descricao:
      "Casa de alto padrão, 3 quartos, sendo 1 com suíte e mais 2 banheiros. Área externa com piscina e vaga para 2 carros na garagem fechada.",
    descricaoCompleta:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, rerum eum! Itaque ea dicta recusandae sint nam accusamus, aliquamassumenda velit, voluptatem soluta quaerat magnam distinctio minusnisi maiores! Minus labore non cupiditate adipisci nam suscipit recusandae aliquam magni optio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, architecto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero qui, atdignissimos accusantium veniam inventore neque exercitationem impedit quia voluptatibus!",
    imovel: "casa",
  },
];

export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}
