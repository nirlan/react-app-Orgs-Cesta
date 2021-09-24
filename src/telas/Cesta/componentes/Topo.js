// Componente criado para compartimentalizar o topo do aplicativo.
// Como esse componenente não será utilizado em todas as telas do aplicativo,
// ele foi colocado dentro da pasta 'componentes', dentro da pasta 
// do componenente pai.
import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

import Texto from '../../../componentes/Texto';
import topo from '../../../../assets/topo.png';

// para pegar a dimensão 'width' atuais da tela
const width = Dimensions.get('screen').width;

export default function Topo({ titulo }) {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>{ titulo }</Texto>
    </>
}

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
});