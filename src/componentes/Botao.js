import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import Texto from './Texto';

export default function Botao({ children, style }) {

    // meu botão customizado; 
    // para customizar o que vai ser executado ao pressionar o batão: 'onPress={() => {}}'    
    return <TouchableOpacity style={[style, estilos.botao]}>
        <Texto style={[style.textoBotao, estilos.textoBotao]}>{ children }</Texto>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    botao: {
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
});