import { FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase.config"

export default function Index() {
  const [tenant, setTenant] = useState('');

  async function verificarEsola() {
    if(!tenant.trim()) return;
    
    console.log('DB:', db);

    const docRef = doc(db, 'escolas', tenant);
    const docSnap = await getDoc(docRef);

    console.log('docSnap', docSnap)

    if (docSnap.exists()) {
      router.push(`/${tenant}/signIn`);
    } else {
      Alert.alert('Escola não encontrada');
    }
  }

  return (
    <View className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <View className="w-full max-w-md bg-white p-6 rounded-md border border-gray-300 space-y-6">
        <View className="text-center space-y-4">
          <View className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
            <FontAwesome6 name="graduation-cap" size={24} color="white" />
          </View>
          <Text className="text-2xl font-bold text-gray-800 text-center">EduCady</Text>
          <Text className="text-gray-600 text-center">Conectando escola, família e educação</Text>
        </View>
        <View className="space-y-6">
          <View className="space-y-2">
            <Text className="text-sm text-gray-700 font-semibold">
              Código da Escola
            </Text>
            <TextInput
              placeholder="Digite o código da sua escola"
              className="tracking-wider border text-gray-400 border-gray-300 rounded-lg p-3"
              value={tenant}
              onChangeText={setTenant}
            />
          </View>

          <TouchableOpacity className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg flex items-center justify-center" onPress={verificarEsola}>
            <Text className="text-white font-bold">Continuar</Text>
          </TouchableOpacity>

          <View>
            <Text className="text-xs text-gray-500 text-center">Não possui o código? Entre em contato com a secretaria da escola.</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
