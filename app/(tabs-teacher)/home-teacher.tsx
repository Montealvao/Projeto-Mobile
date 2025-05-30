import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"

export default function TeacherHome() {
    const todaySchedule = [
        { time: "07:30", class: "9º A", subject: "Matemática", room: "Sala 15" },
        { time: "08:20", class: "8º B", subject: "Matemática", room: "Sala 12" },
        { time: "09:10", class: "9º C", subject: "Matemática", room: "Sala 18" },
        { time: "10:20", class: "7º A", subject: "Matemática", room: "Sala 10" },
    ]

    return (
        <ScrollView>
            <View className="p-4 pb-20">
                <View className="mb-6">
                    <Text className="text-2xl font-bold text-gray-800">Olá, Prof. João!</Text>
                    <Text className="text-gray-600">Terça-feira, 12 de Março de 2024</Text>
                </View>

                {/* Cards de Resumo */}
                <View className="grid grid-cols-2 gap-4 mb-6">
                    <View className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <View className="flex flex-row items-center space-x-2">
                            <Feather name="users" size={24} color="blue" />
                            <View>
                                <View className="text-2xl font-bold text-blue-600">6</View>
                                <View className="text-sm text-gray-600">Turmas</View>
                            </View>
                        </View>
                    </View>
                    <View className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <View className="flex flex-row items-center space-x-2">
                            <MaterialCommunityIcons name="clipboard-check-outline" size={24} color="green" />
                            <View>
                                <View className="text-2xl font-bold text-green-600">23</View>
                                <View className="text-sm text-gray-600">P/ Corrigir</View>
                            </View>
                        </View>
                    </View>
                    <View className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                        <View className="flex flex-row items-center space-x-2">
                            <Feather name="message-square" size={24} color="orange" />
                            <View>
                                <View className="text-2xl font-bold text-orange-600">8</View>
                                <View className="text-sm text-gray-600">Mensagens</View>
                            </View>
                        </View>
                    </View>
                    <View className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                        <View className="flex flex-row items-center space-x-2">
                            <Feather name="calendar" size={24} color="purple" />
                            <View>
                                <View className="text-2xl font-bold text-purple-600">4</View>
                                <View className="text-sm text-gray-600">Aulas Hoje</View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Horário de Hoje */}
                <View className="mb-6 bg-white p-6 rounded-md border border-gray-300 space-y-6">
                    <View>
                        <View className="text-lg flex flex-row gap-2 font-semibold items-center">
                            <Feather name="calendar" size={24} color="black" />
                            Aulas de Hoje
                        </View>
                    </View>
                    <view className="space-y-3">
                        {todaySchedule.map((lesson, index) => (
                            <View key={index} className="flex flex-row items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <View className="flex flex-row items-center space-x-3">
                                    <View className="text-center">
                                        <View className="text-sm font-bold">{lesson.time}</View>
                                    </View>
                                    <View>
                                        <View className="font-semibold">{lesson.class}</View>
                                        <View className="text-sm text-gray-600">
                                            {lesson.subject} • {lesson.room}
                                        </View>
                                    </View>
                                </View>
                                <TouchableOpacity className="bg-white p-2 text-sm rounded-md border border-gray-300">
                                    Chamada
                                </TouchableOpacity>
                            </View>
                        ))}
                    </view>
                </View>

                {/* Ações Rápidas */}
                <View className="bg-white p-6 rounded-md border border-gray-300 space-y-6">
                    <View>
                        <View className="text-lg font-semibold">Ações Rápidas</View>
                    </View>
                    <View>
                        <View className="grid grid-cols-2 gap-3 ">
                            <TouchableOpacity className="h-16 flex gap-2 justify-center items-center font-semibold bg-white p-2 rounded-md border border-gray-300">
                                <AntDesign name="plus" size={16} color="black" />
                                <View className="text-xs">Nova Atividade</View>
                            </TouchableOpacity>
                            <TouchableOpacity className="h-16 flex gap-2 justify-center items-center font-semibold bg-white p-2 rounded-md border border-gray-300">
                                <MaterialCommunityIcons name="clipboard-check-outline" size={16} color="black" />
                                <View className="text-xs">Lançar Notas</View>
                            </TouchableOpacity>
                            <TouchableOpacity className="h-16 flex gap-2 justify-center items-center font-semibold bg-white p-2 rounded-md border border-gray-300">
                                <Feather name="message-square" size={16} color="black" />
                                <View className="text-xs">Enviar Aviso</View>
                            </TouchableOpacity>
                            <TouchableOpacity className="h-16 flex gap-2 justify-center items-center font-semibold bg-white p-2 rounded-md border border-gray-300">
                                <Feather name="book-open" size={16} color="black" />
                                <View className="text-xs">Material</View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}