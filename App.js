import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

// import do meu componente sem as chaves porque eu estou
// importando o 'default'
import Cesta from './src/telas/Cesta'

export default function App() {
  return (

    // importante para IOS para que o app respeite a statusbar e uma barra de
    // ações que tem no footer do IOS. SafeAreaView substitui a View.
    <SafeAreaView>

      {/* deletar a StatusBar do expo e usar a StatusBar do react-native */}
      <StatusBar />

      {/* meu componente */}
      <Cesta />
    </SafeAreaView>
  );
}
