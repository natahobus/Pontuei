// app/(tabs)/home.tsx home app
import React from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import ScreenContainer from "../../components/ScreenContainer";
import Card from "../../components/Card";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const router = useRouter();

  const ultimos = [
    { id: "1", nome: "Diadê", img: "https://via.placeholder.com/100" },
    { id: "2", nome: "Santa Barba", img: "https://via.placeholder.com/100" },
    { id: "3", nome: "Nicolini", img: "https://via.placeholder.com/100" },
  ];

  const servicos = [
    { id: "1", nome: "Cafeterias", icon: "cafe-outline" },
    { id: "2", nome: "Mercados", icon: "cart-outline" },
    { id: "3", nome: "Barbearias", icon: "cut-outline" },
    { id: "4", nome: "Restaurantes", icon: "restaurant-outline" },
  ];

  const lojasProximas = [
    { id: "1", nome: "Café Bom Dia", img: "https://via.placeholder.com/200" },
    { id: "2", nome: "Barbearia Style", img: "https://via.placeholder.com/200" },
    { id: "3", nome: "Mercado Central", img: "https://via.placeholder.com/200" },
  ];

  const avisos = [
    { id: "1", titulo: "Promoção exclusiva 💥", cor: "#fde2e4" },
    { id: "2", titulo: "Ganhe pontos em dobro ⭐", cor: "#fff3b0" },
    { id: "3", titulo: "Novo parceiro cadastrado 🎉", cor: "#d0f4de" },
  ];

  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Logo e boas-vindas */}
        <Text style={tw`text-xl font-bold text-red-500 mb-2 text-center`}>pontuei.</Text>
        <Text style={tw`text-base text-gray-800 mb-5`}>
          Bem-vindo de volta,{"\n"}
          <Text style={tw`font-bold`}>Natã Kuhn!</Text>
        </Text>

        {/* Barra de busca */}
        <TextInput
          style={tw`bg-gray-100 p-3 rounded-xl mb-6`}
          placeholder="Pesquise por lojas, cafeterias e mais"
          placeholderTextColor="#999"
        />

        {/* Últimos visitados */}
        <View style={tw`mb-6`}>
          <View style={tw`flex-row justify-between mb-3`}>
            <Text style={tw`text-base font-semibold text-gray-800`}>Últimos estabelecimentos</Text>
            <Text style={tw`text-sm text-red-500`}>ver mais</Text>
          </View>
          <FlatList
            data={ultimos}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => router.push(`/store/${item.id}`)}>
                <Card className="mr-3 items-center p-2 w-25">
                  <Image source={{ uri: item.img }} style={tw`w-20 h-20 rounded-xl mb-2 bg-gray-200`} />
                  <Text style={tw`text-xs text-gray-800 text-center`}>{item.nome}</Text>
                </Card>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Carrossel de avisos */}
        <View style={tw`mb-6`}>
          <FlatList
            data={avisos}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card className="justify-center items-center mr-3" style={{ width: width - 60, height: 120, backgroundColor: item.cor }}>
                <Text style={tw`text-base font-semibold text-gray-800 text-center`}>{item.titulo}</Text>
              </Card>
            )}
          />
        </View>

        {/* Serviços */}
        <Text style={tw`text-base font-semibold text-gray-800`}>Serviços</Text>
        <View style={tw`flex-row flex-wrap justify-between mb-6`}>
          {servicos.map((s) => (
            <TouchableOpacity key={s.id} style={tw`w-[48%] h-25 bg-gray-50 rounded-xl justify-center items-center mb-3`}>
              <Ionicons name={s.icon as any} size={24} color="#E94057" />
              <Text style={tw`text-gray-800 font-medium mt-2`}>{s.nome}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Lojas próximas */}
        <Text style={tw`text-base font-semibold text-gray-800`}>Lojas próximas de você</Text>
        <FlatList
          data={lojasProximas}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => router.push(`/store/${item.id}`)}>
              <Card className="w-40 h-35 mr-3 items-center p-2">
                <Image source={{ uri: item.img }} style={tw`w-full h-24 rounded-xl mb-2 bg-gray-200`} />
                <Text style={tw`text-xs text-gray-800 text-center`}>{item.nome}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </ScreenContainer>
  );
};

export default HomeScreen;


