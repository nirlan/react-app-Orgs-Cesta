import React from 'react';
import { StyleSheet, Image, Dimensions, View } from 'react-native';

import Texto from '../componentes/Texto';

// importando a imagem para encontrar a pasta dela tenho que dar
// 'cd ..' duas vezes, por isso o '../../'
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

// para pegar a dimensão 'width' atuais da tela
const width = Dimensions.get('screen').width;

// Para que não precise usar as chaves para importar o meu componente
// eu uso a palavra chave 'default'. Se eu não colocar o default, eu
// posso criar várias funções para exportar e importar no meu App.js
// somente aquelas que eu quero usando o import com chaves '{...}'.
export default function Cesta() {

    // '<>...</> cria um fragmento sem a necessidade de criar uma View,
    // uma outra camada para retornar a função (porque a função só pode
    // retornar uma coisa só!) dessa forma esses elementos retornados
    // serão irmãos da StatusBar, se eu criasse uma View nova para conter
    // eles, essa View que eu criei que seria a irmã da StatusBar (no App.js
    // que importa a Cesta.js).
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>Detalhe da cesta</Texto>

        <View style={estilos.cesta}>
            <Texto style={estilos.nome}>Cesta de Verduras</Texto>

            {/* Nested View: eu criou uma <View> filha para que eu possa mudar
            o layout dos elementos dentro dentro dela, sem precisar alterar os
            elementos irmãos - View é como '<div>' na web */}
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.imagemFazenda} />
                <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
            </View>

            <Texto style={estilos.descricao}>
                Uma cesta com produtos selecionados
                cuidadosamente da fazenda para
                sua cozinha
            </Texto>
            <Texto style={estilos.preco}>R$ 40,00</Texto>
        </View>
    </>
}

// StyleSheet é utilizado para criar os estilos em React Native;
// é forma otimizada de criar os estilos do componenente.
const estilos = StyleSheet.create({
    topo: {
        width: "100%",

        // Para uma altura responsiva da imagem:
        // (altura da imagem) / (largura da imagem) * largura atual da tela;
        // isso mantem a proporção entre altura x largura da imagem.
        height: 578 / 768 * width,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    fazenda: {

        // 'flexDirection' muda a ordenação das coisas na tela;
        // o default é "column", como eu queria colocar uma coisa do lado 
        // da outra eu usei "row". Por padrão todos os elementos do React
        // Native já são 'display: flex'.
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
});

// Nos primórdios do React Native, componentes com base em classes eram
// a única forma de declarar componentes. Dessa forma, é criada uma classe
// que estende Component importado de react, e é implementado um método render
// que retorna as TAGs do componente. Exemplo abaixo:

// import React, { Component } from 'react';
// import { Text, View } from 'react-native';

// class MeuComponente extends Component {
//   render() {
//     return (
//       <View>
//         <Text>Olá mundo!</Text>
//       </View>
//     );
//   }
// }

// export default MeuComponente;

// Porém, ela é bem menos usada, pois impossibilita a utilização de algumas
// funcionalidades recentes do React Native.