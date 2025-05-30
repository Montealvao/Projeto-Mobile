import { Feather, MaterialCommunityIcons } from "@expo/vector-icons"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"

export default function TeacherClasses() {
    const classes = [
        { name: "7º Ano A", students: 28, subject: "Matemática", nextClass: "Amanhã 07:30" },
        { name: "8º Ano B", students: 25, subject: "Matemática", nextClass: "Hoje 08:20" },
        { name: "9º Ano A", students: 30, subject: "Matemática", nextClass: "Hoje 07:30" },
        { name: "9º Ano C", students: 27, subject: "Matemática", nextClass: "Hoje 09:10" },
    ]

    return (
        <ScrollView>

            <View className="p-4 pb-20">
                <View className="mb-6">
                    <Text className="text-2xl font-bold text-gray-800">Minhas Turmas</Text>
                    <Text className="text-gray-600">Matemática</Text>
                </View>

                <View className="space-y-4">
                    {classes.map((classItem, index) => (
                        <View key={index} className="bg-white p-6 rounded-md border border-gray-300 space-y-4">
                            <View className="flex flex-row justify-between items-start">
                                <View>
                                    <Text className="font-bold text-lg">{classItem.name}</Text>
                                    <Text className="text-gray-600 text-sm">{classItem.students} alunos</Text>
                                </View>
                                <View className="bg-white text-xs font-semibold border border-gray-300 rounded-xl px-2 py-0.5">{classItem.subject}</View>
                            </View>

                            <View>
                                <Text className="text-sm text-gray-600">Próxima aula: {classItem.nextClass}</Text>
                            </View>

                            <View className="grid grid-cols-3 gap-3">
                                <TouchableOpacity className="flex-1 gap-2 flex-row border border-gray-200 rounded-md p-2 text-xs items-center justify-center">
                                    <Feather name="users" size={16} color="black" />
                                    Alunos
                                </TouchableOpacity>
                                <TouchableOpacity className="flex-1 gap-2 flex-row border border-gray-200 rounded-md p-2 text-xs items-center justify-center">
                                    <MaterialCommunityIcons name="clipboard-check-outline" size={16} color="black" />
                                    Notas
                                </TouchableOpacity>
                                <TouchableOpacity className="flex-1 gap-2 flex-row border border-gray-200 rounded-md p-2 text-xs items-center justify-center">
                                    <Feather name="calendar" size={16} color="black" />
                                    Chamada
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}