// MOCKS são usados para evitar 'sujar' o código com informações fictícias
// já que não temos um banco de dados ou uma API RESTfulpara fazer as 
// requisições. 

// importando a imagem para encontrar a pasta dela tenho que dar
// 'cd ..' duas vezes, por isso o '../../'
import logo from '../../assets/logo.png';

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
    }
}

export default cesta;