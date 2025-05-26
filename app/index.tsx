import { FontAwesome6 } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { getDocs, collection, getFirestore, query, where } from "firebase/firestore"
import { db } from "@/firebase.config"

export default function Index() {
 const [tenant, setTenant] = useState<string | null>(null);

  useEffect(() => {
    async function Teste() {
      const q = query(collection(db, "usuarios"))
      const snapshot = await getDocs(q)
      snapshot.forEach((doc) => {
        const data = doc.data().tenant;
        setTenant(data);
      });


      const qt = query(collection(db, "escolas"), where("tenant" , "==", tenant))
      const snapshot2 = await getDocs(qt)
      snapshot2.forEach((doc) => {
        console.log(doc.data());
      })
    }

    Teste()
  }, [])
  console.log("Tenant:", tenant);


  return (
    <View className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <View className="w-full max-w-md bg-white p-6 rounded-md border border-gray-300 space-y-6">
        <View className="text-center space-y-4">
          <View className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
            <FontAwesome6 name="graduation-cap" size={24} color="white" />
          </View>
          <Text className="text-2xl font-bold text-gray-800 text-center">EduCady</Text>
          <Text className="text-gray-600 text-">Conectando escola, família e educação</Text>
        </View>
        <View className="space-y-6">
          <View className="space-y-2">
            <Text className="text-sm text-gray-700 font-semibold">
              Código da Escola
            </Text>
            <TextInput
              placeholder="Digite o código da sua escola"
              className="tracking-wider border text-gray-400 border-gray-300 rounded-lg p-3"
            />
          </View>

          <Link href="/signIn">
            <TouchableOpacity className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg flex items-center justify-center">
              <Text className="text-white font-bold">Continuar</Text>
            </TouchableOpacity>
          </Link>

          <View>
            <Text className="text-xs text-gray-500 text-center">Não possui o código? Entre em contato com a secretaria da escola.</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
