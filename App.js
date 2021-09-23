import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

// 'import' do meu componente sem as chaves porque eu estou
// importando o 'default'. Eu utilizo o nome da pasta que contém o 'index.js'
// do componente. O react reconhece automaticamente. Não há necessidade
// de fazer '.src//telas/Cesta/Cesta' - fica feio o código.
import Cesta from './src/telas/Cesta';

export default function App() {

	// utilizando Google Fonts
	const [fonteCarregada] = useFonts({
		"MontserratRegular": Montserrat_400Regular,
		"MontserratBold": Montserrat_700Bold,
	});

	// como a função App é chamada de forma recorrente por 'render()'
	// ela retornará uma View vazia até que as fontes estejam carregadas
	if (!fonteCarregada) {
		return <View />;
	}

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
