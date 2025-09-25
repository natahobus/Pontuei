import React from "react";
import { TouchableOpacity, Text } from "react-native";
import tw from "twrnc";

type Props = {
  title: string;
  onPress: () => void;
  className?: string;
};

export default function PrimaryButton({ title, onPress, className }: Props) {
  return (
    <TouchableOpacity style={tw`bg-red-500 py-3 px-5 rounded-xl items-center ${className || ""}`} onPress={onPress}>
      <Text style={tw`text-white text-base font-medium`}>{title}</Text>
    </TouchableOpacity>
  );
}
