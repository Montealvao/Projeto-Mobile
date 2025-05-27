import { db } from "../../firebase.config";
import { FontAwesome6 } from "@expo/vector-icons";
import { Link, router, useLocalSearchParams } from "expo-router";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignIn() {
  const { escolaId } = useLocalSearchParams()
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [nomeEscola, setNomeEscola] = useState(null);


  useEffect(() => {
    async function fetchSchool() {
      const escolaIdStr = Array.isArray(escolaId) ? escolaId[0] : escolaId;
      if (!escolaIdStr) return;

      const school = doc(db, 'escolas', escolaIdStr);
      const schoolSnapshot = await getDoc(school);
      if (schoolSnapshot.exists()) {
        const schoolData = schoolSnapshot.data();
        setNomeEscola(schoolData?.nome || 'Escola não encontrada');
      }
    }
    console.log('escolaId', escolaId)
    fetchSchool();
  }, []);


  async function handleSignI() {
    const escolaIdStr = Array.isArray(escolaId) ? escolaId[0] : escolaId;
    const q = query(collection(db, 'usuarios'), where('cpf', '==', cpf), where('senha', '==', senha))
    const snapshot = await getDocs(q);
    console.log('snapshot', snapshot)

    if (snapshot.empty) {
      alert('CPF ou senha inválidos');
      return;
    }

    const user = snapshot.docs[0].data();

    console.log('user', user)

    if (user.tenant !== escolaId) {
      alert('Usuário não pertence a esta escola');
      return;
    }

    // await AsyncStorage.setItem('token', JSON.stringify(user));

    router.push("/(tabs-aluno)/home");
  }

  return (
    <View className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <View className="w-full max-w-md bg-white p-6 rounded-md border border-gray-300 space-y-6">
        <View className="text-center space-y-4">
          <View className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
            <FontAwesome6 name="graduation-cap" size={24} color="white" />
          </View>
          <Text className="text-2xl font-bold text-gray-800 text-center">Fazer Login</Text>
          <Text className="text-gray-600 text-center">{nomeEscola}</Text>
        </View>
        <View className="space-y-6">
          <View className="space-y-2">
            <Text className="text-sm text-gray-700 font-semibold">
              CPF
            </Text>
            <TextInput
              placeholder="000.000.000-00"
              className="tracking-wider border text-gray-400 border-gray-300 rounded-lg p-3"
              value={cpf}
              onChangeText={setCpf}
            />
          </View>

          <View className="space-y-2">
            <Text className="text-sm text-gray-700 font-semibold">
              Senha
            </Text>
            <TextInput
              placeholder="Digite sua senha"
              className="tracking-wider border text-gray-400 border-gray-300 rounded-lg p-3"
              value={senha}
              onChangeText={setSenha}
            />
          </View>

          <TouchableOpacity className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg flex items-center justify-center" onPress={handleSignI}>
            <Text className="text-white font-bold">Continuar</Text>
          </TouchableOpacity>


          <View className="flex flex-row justify-between">
            <Link href="/">
              <Text className="text-xs text-blue-500">Voltar</Text>
            </Link>
            <Link href={"/"}>
              <Text className="text-xs text-blue-500">Esqueci minha senha</Text>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}
