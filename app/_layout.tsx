// app/_layout.tsx  
import { Stack, Link } from "expo-router";
import { Pressable } from "react-native";
import { CartProvider } from "../context/CartContext";
import CartIcon from "../components/CartIcon";
import tw from "twrnc";

export default function RootLayout() {
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
          
