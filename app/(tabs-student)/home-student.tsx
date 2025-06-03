import useSchool from "@/hooks/useUserInfo";
import { ScrollView, Text, View } from "react-native";

export default function Home() {
    const { userData } = useSchool()

    return (
        <View className="flex-1 p-4 gap-6 bg-white">
            <View className="flex gap-1">
                <Text className="text-2xl font-semibold">Olá, {userData?.name}</Text>
                <Text className="text-black/50 text-base">
                    Bem-vindo(a) ao EduConnect
                </Text>
            </View>

            <View className="grid grid-cols-2 gap-4 mb-2">
                <View className="p-4 bg-green-50 border border-green-300 rounded-lg">
                    <View className="text-center">
                        <View className="text-2xl font-bold text-green-600">8</View>
                        <View className="text-sm text-gray-600">Matérias</View>
                    </View>
                </View>
                <View className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <View className="text-center">
                        <View className="text-2xl font-bold text-blue-600">3</View>
                        <View className="text-sm text-gray-600">Atividades</View>
                    </View>
                </View>
                <View className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <View className="text-center">
                        <View className="text-2xl font-bold text-orange-600">2</View>
                        <View className="text-sm text-gray-600">Avisos</View>
                    </View>
                </View>
                <View className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                    <View className="text-center">
                        <View className="text-2xl font-bold text-purple-600">1</View>
                        <View className="text-sm text-gray-600">Mensagens</View>
                    </View>
                </View>
            </View>

            <View className="flex p-4 bg-white border-[1px] border-black/10 rounded-xl gap-6 shadow-black/10 shadow-lg">
                <Text className="text-2xl font-semibold">Próximas atividades</Text>

                <ScrollView>
                    <View className="flex gap-4">
                        <View className="flex flex-row bg-red-500/10 justify-between items-center p-3 rounded-lg">
                            <View className="flex-col">
                                <Text className="font-semibold text-lg">
                                    Prova de Matemática
                                </Text>
                                <Text className="text-black/50 text-base font-medium">
                                    Amanhã, 14:00
                                </Text>
                            </View>

                            <Text className="text-red-500 font-semibold text-base">
                                Urgente
                            </Text>
                        </View>

                        <View className="flex flex-row bg-yellow-500/10 justify-between items-center p-3 rounded-lg">
                            <View className="flex-col">
                                <Text className="font-semibold text-lg">
                                    Trabalho de História
                                </Text>
                                <Text className="text-black/50 text-base font-medium">
                                    Sexta-feira, 23:59
                                </Text>
                            </View>

                            <Text className="text-yellow-600 font-semibold text-base">
                                Pendente
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}
