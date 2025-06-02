import { db } from "../../firebase.config";
import { FontAwesome6 } from "@expo/vector-icons";
import { Link, router, useLocalSearchParams } from "expo-router";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function SignIn() {
  const { id_school } = useLocalSearchParams()
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [schoolName, setSchoolName] = useState(null);

  useEffect(() => {
    async function fetchSchool() {
      const id_schoolStr = Array.isArray(id_school) ? id_school[0] : id_school;
      if (!id_schoolStr) return;

      const school = doc(db, 'schools', id_schoolStr);
      const schoolSnapshot = await getDoc(school);
      if (schoolSnapshot.exists()) {
        const schoolData = schoolSnapshot.data();
        setSchoolName(schoolData.name);
      }
    }
    fetchSchool();
  }, []);


  async function handleSignIn() {
    const id_schoolStr = Array.isArray(id_school) ? id_school[0] : id_school;
    const q = query(collection(db, 'users'), where('cpf', '==', cpf), where('password', '==', password))
    const snapshot = await getDocs(q);
    console.log('snapshot', snapshot.docs[0].data())

    if (snapshot.empty) {
      alert('CPF ou senha inválidos');
      return;
    }

    const tenant = snapshot.docs[0].data().tenant;
    console.log('tenant', tenant)

    if (tenant !== id_schoolStr) {
      alert('Usuário não pertence a esta escola');
      return;
    }

    const user = snapshot.docs[0].id
    console.log("User id: ", user)

    const userInfo = snapshot.docs[0].data()

    const { id_parent, id_student, id_teacher } = userInfo

    await AsyncStorage.setItem("token", user)

    if (id_parent) {
      router.push("/home-parent")
    }

    if (id_student) {
      router.push("/home-student")
    }

    if (id_teacher) {
      router.push("/home-teacher")
    }

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
