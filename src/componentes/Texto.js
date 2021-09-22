import React from "react";
import { Text, StyleSheet } from 'react-native';

// É necessário usar o parâmetro 'style' para que os estilos já
// definidos em 'Texto' sejam passados como argumento para uma
// array que redefinirá o estilo total aplicado nos filhos da 
// view 'Texto'. No caso children são todos os filhos da view 'Texto'.
export default function Texto({ children, style }) {
    let estilo = estilos.texto;

    // a interrogação é para verificar antes se existe o 'style'
    // como propriedade de 'Texto' para evitar erro
    if (style?.fontWeight === 'bold') {
        estilo = estilos.textoNegrito;
    }

    // uso o estilo já definido na tag 'Texto' mais o estilo que eu defini
    // como argumentos do atributo style    
    return <Text style={[style, estilo]}>{children}</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",

        // para evitar que o usuário use uma fontWeight fora das que existem
        // no aplicativo 
        fontWeight: "normal",
    },
    textoNegrito: {
        fontFamily: "MontserratBold",

        // a fonte já é bold, se eu deixar 'fontWeight: "bold"' ela não vai funcionar
        // isso sobrescreve essa declaração 
        fontWeight: "normal",
    }
});