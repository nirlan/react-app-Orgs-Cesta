import React from 'react';
import { Text } from 'react-native';

// Para que não precise usar as chaves para importar o meu componente
// eu uso a palavra chave 'default'. Se eu não colocar o default, eu
// posso criar várias funções para exportar e importar no meu App.js
// somente aquelas que eu quero usando o import com chaves '{...}'.
export default function Cesta() {
    return <Text>Cesta</Text>
}

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