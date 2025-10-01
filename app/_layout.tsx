// app/_layout.tsx  
import { Stack, Link } from "expo-router";
import { Pressable } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { CartProvider } from "../context/CartContext";
import CartIcon from "../components/CartIcon";
import useCustomFonts from '../hooks/useFonts';
import tw from "twrnc";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const fontsLoaded = useCustomFonts();

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <CartProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen
          name="store/[id]"
          options={{
            title: "Loja",
            headerRight: () => (
              <Link href="/cart" asChild>
                <Pressable style={tw`mr-3`}>
                  <CartIcon color="#000" size={24} />
                </Pressable>
              </Link>
            ),
          }}
        />

        <Stack.Screen name="cart" options={{ title: "Carrinho" }} />
      </Stack>
    </CartProvider>
  );
}         
          
