import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item';
import Texto from '../../componentes/Texto';

// Para que não precise usar as chaves para importar o meu componente
// eu uso a palavra chave 'default'. Se eu não colocar o default, eu
// posso criar várias funções para exportar e importar no meu App.js
// somente aquelas que eu quero usando o import com chaves '{...}'.
export default function Cesta({ topo, detalhes, itens }) {

    // '<>...</> cria um fragmento sem a necessidade de criar uma View,
    // uma outra camada para retornar a função (porque a função só pode
    // retornar uma coisa só!) dessa forma esses elementos retornados
    // serão irmãos da StatusBar, se eu criasse uma View nova para conter
    // eles, essa View que eu criei que seria a irmã da StatusBar (no App.js
    // que importa a Cesta.js).
    return <>
        {/* 'FlatList' renderiza somente os componentes visíveis na tela */}
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome }

            // acrescenta os demais componentes que estão fora da lista na tela
            ListHeaderComponent={() => {
                return <>
                    {/* aqui eu descronstuo o objeto 'topo' e consigo acessar cada um dos
                    argumentos diretamente */}
                    <Topo {...topo} />
                     {/* Deixo essa 'View' aqui e não levo junto para 'Detalhes' porque
                    ela está estilizada com a margem comum a todos os componentes. */}
                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes} />
                        <Texto style={estilos.titulo}>{ itens.titulo }</Texto>
                    </View>                    
                </>
            }}          
        />
    </>
}

// StyleSheet é utilizado para criar os estilos em React Native;
// é forma otimizada de criar os estilos do componenente.
const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
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