import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Texto from '../../../componentes/Texto';

// importando a imagem para encontrar a pasta dela tenho que dar
// 'cd ..' duas vezes, por isso o '../../'
import logo from '../../../../assets/logo.png';

export default function Detalhes() {
    return <>
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
    </>
}

const estilos = StyleSheet.create({    
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