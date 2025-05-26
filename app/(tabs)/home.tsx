import { View, Text, ScrollView } from "react-native";

// R E T U R N

export default function Home() {
    return (
        <View className="flex-1 p-4 gap-6 bg-white">

            <View className="flex gap-1">
                <Text className="text-2xl font-semibold">Olá, Maria!</Text>
                <Text className="text-black/50 text-base">Bem-vindo(a) ao EduConnect</Text>
            </View>

            <View className="flex flex-col justify-between gap-3">
                <View className="flex flex-row justify-between gap-3">
                    <View className="flex-1 flex-col justify-center items-center p-4 rounded-xl bg-blue-600/10 border-[1px] border-blue-700/50">
                        <Text className="text-blue-600 text-2xl font-bold">8</Text>
                        <Text className="text-gray-900 text-base font-medium">Matérias</Text>
                    </View>

                    <View className="flex-1 flex-col justify-center items-center p-4 rounded-xl bg-green-500/10 border-[1px] border-green-500/50">
                        <Text className="text-green-600 text-2xl font-bold">12</Text>
                        <Text className="text-gray-900 text-base font-medium">Atividades</Text>
                    </View>
                </View>

                <View className="flex flex-row justify-between gap-3">
                    <View className="flex-1 flex-col justify-center items-center p-4 rounded-xl bg-orange-500/10 border-[1px] border-orange-500/50">
                        <Text className="text-orange-500 text-2xl font-bold">3</Text>
                        <Text className="text-gray-900 text-base font-medium">Avisos</Text>
                    </View>

                    <View className="flex-1 flex-col justify-center items-center p-4 rounded-xl bg-purple-600/10 border-[1px] border-purple-600/50">
                        <Text className="text-purple-500 text-2xl font-bold">5</Text>
                        <Text className="text-gray-900 text-base font-medium">Mensagens</Text>
                    </View>
                </View>
            </View>

            <View className="flex p-4 bg-white border-[1px] border-black/10 rounded-xl gap-6 shadow-black/10 shadow-lg">
                <Text className="text-2xl font-semibold">Próximas atividades</Text>
                
                <ScrollView>
                    <View className="flex gap-2">
                        <View className="flex flex-row bg-red-500/10 justify-between items-center p-3 rounded-lg">
                            <View className="flex-col">
                                <Text className="font-semibold text-lg">Prova de Matemática</Text>
                                <Text className="text-black/50 text-base font-medium">Amanhã, 14:00</Text>
                            </View>

                            <Text className="text-red-500 font-semibold text-base">Urgente</Text>
                        </View>

                        <View className="flex flex-row bg-yellow-500/10 justify-between items-center p-3 rounded-lg">
                            <View className="flex-col">
                                <Text className="font-semibold text-lg">Trabalho de História</Text>
                                <Text className="text-black/50 text-base font-medium">Sexta-feira, 23:59</Text>
                            </View>

                            <Text className="text-yellow-600 font-semibold text-base">Pendente</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>

        </View>
    )
}