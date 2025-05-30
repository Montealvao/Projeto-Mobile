import { db } from "../../firebase.config";
import { FontAwesome6 } from "@expo/vector-icons";
import { Link, router, useLocalSearchParams } from "expo-router";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignIn() {
  const { school_id } = useLocalSearchParams()
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [schoolName, setSchoolName] = useState(null);


  useEffect(() => {
    async function fetchSchool() {
      const school_idStr = Array.isArray(school_id) ? school_id[0] : school_id;
      if (!school_idStr) return;

      const school = doc(db, 'escolas', school_idStr);
      const schoolSnapshot = await getDoc(school);
      if (schoolSnapshot.exists()) {
        const schoolData = schoolSnapshot.data();
        setSchoolName(schoolData.nome);
      }
    }
    console.log('school_id', school_id)
    fetchSchool();
  }, []);


  async function handleSignIn() {
    const school_idStr = Array.isArray(school_id) ? school_id[0] : school_id;
    const q = query(collection(db, 'usuarios'), where('cpf', '==', cpf), where('senha', '==', password))
    const snapshot = await getDocs(q);
    console.log('snapshot', snapshot.docs[0].data())

    if (snapshot.empty) {
      alert('CPF ou senha inválidos');
      return;
    }

    const user = snapshot.docs[0].data();

    console.log('user', user)

    if (user.tenant !== school_idStr) {
      alert('Usuário não pertence a esta escola');
      return;
    }

    const { id, id_aluno } = user

    await AsyncStorage.setItem('token', JSON.stringify({ id, id_aluno }));
  }

  return (
    <View className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <View className="w-full max-w-md bg-white p-6 rounded-md border border-gray-300 space-y-6">
        <View className="text-center space-y-4">
          <View className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
            <FontAwesome6 name="graduation-cap" size={24} color="white" />
          </View>
          <Text className="text-2xl font-bold text-gray-800 text-center">Fazer Login</Text>
          <Text className="text-gray-600 text-center">{schoolName}</Text>
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
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg flex items-center justify-center" onPress={handleSignIn}>
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
