import React from 'react';
import { StyleSheet, Image, Dimensions, Text } from 'react-native';

// importando a imagem para encontrar a pasta dela tenho que dar
// 'cd ..' duas vezes, por isso o '../../'
import topo from '../../assets/topo.png';

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
        <Text style={estilos.titulo}>Detalhe da cesta</Text>
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
        padding: 16
    }
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