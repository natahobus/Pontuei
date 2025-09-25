import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native";
import tw from "twrnc";

export default function ScreenContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <SafeAreaView style={tw`flex-1 p-4 ${className || ""}`}>{children}</SafeAreaView>
    </SafeAreaView>
  );
}
