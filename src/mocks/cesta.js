// MOCKS são usados para evitar 'sujar' o código com informações fictícias
// já que não temos um banco de dados ou uma API RESTful para fazer as 
// requisições. 

// importando a imagem para encontrar a pasta dela tenho que dar
// 'cd ..' duas vezes, por isso o '../../'
import logo from '../../assets/logo.png';

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

// Criação de um objeto 'cesta' que será exportado para preencher todas
// as marcações de texto.
const cesta = {
    topo: {
        titulo: "Detalhe da cesta",
    },
    detalhes: {
        nome: "Cesta de Verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda para sua cozinha",
        preco: "R$ 40,00",
        botao: "Comprar",
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
          {
            nome: "Tomate",
            imagem: tomate,
          },
          {
            nome: "Brócolis",
            imagem: brocolis,
          },
          {
            nome: "Batata",
            imagem: batata,
          },
          {
            nome: "Pepino",
            imagem: pepino,
          },
          {
            nome: "Abóbora",
            imagem: abobora,
          }
        ]
    }
}

export default cesta;