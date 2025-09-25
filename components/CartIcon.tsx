// components/CartIcon.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "../context/CartContext";

type Props = {
  color?: string;
  size?: number;
};

export default function CartIcon({ color = "#000", size = 24 }: Props) {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <View style={{ paddingRight: 12 }}>
      <Ionicons name="cart-outline" size={size} color={color} />
      {totalItems > 0 && (
        <View
          style={{
            position: "absolute",
            right: 4,
            top: -4,
            backgroundColor: "#E94057",
            borderRadius: 12,
            minWidth: 18,
            height: 18,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 4,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 11, fontWeight: "bold" }}>
            {totalItems}
          </Text>
        </View>
      )}
    </View>
  );
}
