import { FontAwesome6 } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignIn() {

    return (
        <View className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <View className="w-full max-w-md bg-white p-6 rounded-md border border-gray-300 space-y-6">
                <View className="text-center space-y-4">
                    <View className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                        <FontAwesome6 name="graduation-cap" size={24} color="white" />
                    </View>

                    <Text className="text-2xl font-bold text-gray-800 text-center">Fazer Login</Text>
                    <Text className="text-gray-600 text-center">Escola: Colégio São Francisco</Text>
                </View>
                
                <View className="space-y-6">
                    <View className="space-y-2">
                        <Text className="text-sm text-gray-700 font-semibold">
                            CPF
                        </Text>
                        <TextInput
                            placeholder="000.000.000-00"
                            className="tracking-wider border text-gray-400 border-gray-300 rounded-lg p-3"
                        />
                    </View>

                    <View className="space-y-2">
                        <Text className="text-sm text-gray-700 font-semibold">
                            Senha
                        </Text>
                        <TextInput
                            placeholder="Digite sua senha"
                            className="tracking-wider border text-gray-400 border-gray-300 rounded-lg p-3"
                        />
                    </View>

                    <Link href="/(tabs)/home">
                        <TouchableOpacity className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg flex items-center justify-center">
                            <Text className="text-white font-bold">Continuar</Text>
                        </TouchableOpacity>
                    </Link>

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