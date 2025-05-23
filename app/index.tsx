import { useEffect } from "react";
import { Text, View } from "react-native";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase.config";

export default function Index() {
  useEffect(() => {
    async function Teste() {
      const escolas = await getDocs(collection(db, "escolas"));
      const lista = escolas.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      }
      );
      console.log(lista);

    }
    Teste();
  },[])
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-dark-200 font-bold">Bem vindo</Text>
    </View>
  );
}
