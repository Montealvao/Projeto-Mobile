import { Text, TouchableOpacity, View } from "react-native";

export default function Subjects() {

    const subjects = [
        { name: "Matemática", teacher: "Prof. João", activities: 3, grade: 8.5 },
        { name: "Português", teacher: "Prof. Ana", activities: 2, grade: 9.0 },
        { name: "História", teacher: "Prof. Carlos", activities: 1, grade: 7.8 },
        { name: "Geografia", teacher: "Prof. Maria", activities: 4, grade: 8.2 },
        { name: "Ciências", teacher: "Prof. Pedro", activities: 2, grade: 8.8 },
        { name: "Inglês", teacher: "Prof. Sarah", activities: 1, grade: 9.2 },
    ]


    return (
        <View className="p-4 pb-20">
            <View className="mb-6">
                <Text className="text-2xl font-bold text-gray-800">Minhas Matérias</Text>
                <Text className="text-gray-600">9º Ano B</Text>
            </View>

            <div className="space-y-4">
                {subjects.map((subject, index) => (
                    <View key={index} className=" bg-white p-6 rounded-md border border-gray-300 ">
                        <View className="flex flex-row justify-between items-start mb-3">
                            <View>
                                <Text className="font-bold text-lg">{subject.name}</Text>
                                <Text className="text-gray-600 text-sm">{subject.teacher}</Text>
                            </View>
                            <View className="text-right">
                                <View className="text-lg font-bold text-blue-600">{subject.grade}</View>
                                <View className="text-xs text-gray-500">Média</View>
                            </View>
                        </View>

                        <View className="flex flex-row justify-between items-center">
                            <View className="flex items-center space-x-4">
                                <View className="text-center">
                                    <View className="text-sm font-medium">{subject.activities}</View>
                                    <View className="text-xs text-gray-500">Atividades</View>
                                </View>
                            </View>
                            <TouchableOpacity className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Ver Detalhes
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </div>
        </View>
    )
}