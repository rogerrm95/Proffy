import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo'
import { NavigationContainer } from '@react-navigation/native';

// Fonts //
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'

// Routes //
import Routes from './src/routes';

// Contexts //
import { AuthProvider } from './src/contexts/auth'

export default function App() {


  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }
  else {
    return (
      <NavigationContainer>
        <AuthProvider>
          <Routes />
          <StatusBar style="auto" />
        </AuthProvider>
      </NavigationContainer>
    );
  }
}