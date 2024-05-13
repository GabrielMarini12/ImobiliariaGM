import { criarProdutos } from "./src/cardImovel";
import { pegarCurtida } from "./src/curtida";
import { iniciarFiltros } from "./src/filtrosCatalogo";
import { chamarNoWhats, irParaFavoritos } from "./src/utilidades";

criarProdutos();
iniciarFiltros();
irParaFavoritos();
pegarCurtida();
chamarNoWhats();
