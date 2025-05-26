import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Profile() {
    return (
        <View className="p-4 pb-20">
            <View className="mb-6">
                <Text className="text-2xl font-bold text-gray-800">Meu Perfil</Text>
            </View>

            <View className="mb-6  bg-white p-6 rounded-md border border-gray-300 space-y-6">
                <View className="mb-6">
                    <View className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Text className="text-2xl font-bold text-white">
                            MS
                        </Text>
                    </View>
                    <Text className="text-xl font-bold text-center text-gray-800">Maria Silva Santos</Text>
                    <Text className="text-gray-600 text-center">Aluna</Text>
                </View>

                <View className="space-y-4">
                    <View className="flex flex-row justify-between">
                        <Text className="text-gray-600">Turma/Área:</Text>
                        <Text className="font-semibold">9° Ano B</Text>
                    </View>
                    <View className="flex flex-row justify-between">
                        <Text className="text-gray-600">ID:</Text>
                        <Text className="font-semibold">2024001</Text>
                    </View>
                    <View className="flex flex-row justify-between">
                        <Text className="text-gray-600">Email:</Text>
                        <Text className="font-semibold">maria.santos@email.com</Text>
                    </View>
                </View>

            </View>

            <View className="space-y-3">
                <TouchableOpacity className="w-full justify-start  bg-white p-2 rounded-md border border-gray-300">
                    Editar Perfil
                </TouchableOpacity>
                <TouchableOpacity className="w-full justify-start  bg-white p-2 rounded-md border border-gray-300">
                    Alterar Senha
                </TouchableOpacity>
                <TouchableOpacity className="w-full justify-start  bg-white p-2 rounded-md border border-gray-300">
                    Configurações
                </TouchableOpacity>
                <TouchableOpacity className="w-full justify-start text-white bg-red-500 p-2 rounded-md border border-gray-200">
                    Sair
                </TouchableOpacity>
            </View>
        </View >
    )
}