import { Feather } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function ParentGradesScreen() {
    const subjects = [
        {
            name: "Matemática",
            teacher: "Prof. João",
            grades: [8.5, 7.8, 9.0],
            average: 8.4,
            trend: "up",
        },
        {
            name: "Português",
            teacher: "Prof. Ana",
            grades: [9.0, 8.7, 8.9],
            average: 8.9,
            trend: "stable",
        },
        {
            name: "História",
            teacher: "Prof. Carlos",
            grades: [7.5, 8.0, 8.2],
            average: 7.9,
            trend: "up",
        },
        {
            name: "Geografia",
            teacher: "Prof. Maria",
            grades: [8.8, 8.5, 8.0],
            average: 8.4,
            trend: "down",
        },
        {
            name: "Ciências",
            teacher: "Prof. Pedro",
            grades: [9.2, 8.9, 9.1],
            average: 9.1,
            trend: "stable",
        },
        {
            name: "Inglês",
            teacher: "Prof. Sarah",
            grades: [8.0, 8.5, 9.0],
            average: 8.5,
            trend: "up",
        },
    ]

    const getTrendIcon = (trend: string) => {
        switch (trend) {
            case "up":
                return <Feather name="trending-up" size={24} color="green" />
            case "down":
                return <Feather name="trending-down" size={24} color="red" />
            default:
                return <View className="w-4 h-4 bg-gray-400 rounded-full" />
        }
    }

    const getAverageColor = (average: number) => {
        if (average >= 9) return "text-green-600"
        if (average >= 7) return "text-blue-600"
        if (average >= 6) return "text-orange-600"
        return "text-red-600"
    }

    return (
        <ScrollView>

            <View className="p-4 pb-20">
                <View className="mb-6">
                    <Text className="text-2xl font-bold text-gray-800">Notas e Desempenho</Text>
                    <Text className="text-gray-600">Maria Silva Santos - 9º Ano B</Text>
                </View>

                {/* Resumo Geral */}
                <View className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
                    <View className="p-4">
                        <View className="text-center">
                            <View className="text-3xl font-bold text-blue-600 mb-2">8.7</View>
                            <View className="text-gray-600">Média Geral</View>
                            <View className="flex flex-row gap-2 justify-center items-center mt-2">
                                <Feather name="trending-up" size={24} color="green" />
                                <View className="text-sm text-green-600">Melhorando</View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Lista de Matérias */}
                <View className="space-y-4">
                    {subjects.map((subject, index) => (
                        <View key={index} className="bg-white p-6 rounded-md border border-gray-300 space-y-6">
                            <View className="flex flex-row justify-between items-start mb-3">
                                <View>
                                    <Text className="font-bold text-lg">{subject.name}</Text>
                                    <Text className="text-gray-600 text-sm">{subject.teacher}</Text>
                                </View>
                                <View className="text-right flex flex-row items-center space-x-2">
                                    {getTrendIcon(subject.trend)}
                                    <View className={`text-xl font-bold ${getAverageColor(subject.average)}`}>{subject.average}</View>
                                </View>
                            </View>

                            <View>
                                <View className="text-sm text-gray-600 mb-2">Últimas notas:</View>
                                <View className="flex flex-row space-x-2">
                                    {subject.grades.map((grade, gradeIndex) => (
                                        <View key={gradeIndex} className="text- border border-gray-200 rounded-xl px-2 font-semibold">
                                            {grade}
                                        </View>
                                    ))}
                                </View>
                            </View>

                            <TouchableOpacity className="w-full border border-gray-200 rounded-md p-2 text-center font-semibold text-sm">
                                Ver Detalhes
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}