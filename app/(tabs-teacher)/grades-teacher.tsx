import { AntDesign, Feather, FontAwesome6 } from "@expo/vector-icons"
import { useState } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"

export default function TeachersGradesManagement() {
    const [selectedClass, setSelectedClass] = useState("9º Ano A")
    const [selectedActivity, setSelectedActivity] = useState("Prova Bimestral")

    const activities = [
        { name: "Prova Bimestral", date: "15/03/2024", status: "pending", submissions: 28 },
        { name: "Trabalho em Grupo", date: "10/03/2024", status: "graded", submissions: 30 },
        { name: "Lista de Exercícios", date: "05/03/2024", status: "graded", submissions: 29 },
    ]

    const students = [
        { name: "Ana Silva", grade: null, status: "pending" },
        { name: "Bruno Santos", grade: 8.5, status: "graded" },
        { name: "Carlos Oliveira", grade: null, status: "pending" },
        { name: "Diana Costa", grade: 9.0, status: "graded" },
        { name: "Eduardo Lima", grade: null, status: "pending" },
    ]

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "graded":
                return <Feather name="check-circle" size={24} color="black" />
            case "pending":
                return <FontAwesome6 name="clock" size={24} color="black" />
            default:
                return <Feather name="alert-triangle" size={24} color="black" />
        }
    }

    return (
        <div className="p-4 pb-20">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Gerenciar Notas</h1>
            </div>

            {/* Seletor de Turma */}
            <View className="mb-4">
                <View className="p-4">
                    <Text className="text-sm font-medium text-gray-700 mb-2 block">Turma</Text>
                    <select
                        value={selectedClass}
                        onChange={(e) => setSelectedClass(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option>9º Ano A</option>
                        <option>9º Ano C</option>
                        <option>8º Ano B</option>
                        <option>7º Ano A</option>
                    </select>
                </View>
            </View>

            {/* Lista de Atividades */}
            <View className="mb-4">
                <View>
                    <Text className="text-lg">Atividades</Text>
                </View>
                <View className="space-y-3">
                    {activities.map((activity, index) => (
                        <View
                            key={index}
                            className={`p-3 rounded-lg border cursor-pointer transition-colors ${selectedActivity === activity.name ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:bg-gray-50"
                                }`}
                        // onClick={() => setSelectedActivity(activity.name)}
                        >
                            <View className="flex justify-between items-center">
                                <View>
                                    <View className="font-medium">{activity.name}</View>
                                    <View className="text-sm text-gray-600">{activity.date}</View>
                                </View>
                                <View className="flex items-center space-x-2">
                                    {getStatusIcon(activity.status)}
                                    <View className="text-sm">{activity.submissions}/30</View>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </View>

            {/* Lista de Alunos */}
            <View>
                <View>
                    <View className="flex justify-between items-center">
                        <Text className="text-lg">{selectedActivity}</Text>
                        <TouchableOpacity>
                            <AntDesign name="plus" size={24} color="black" />
                            Lançar Todas
                        </TouchableOpacity>
                    </View>
                </View>
                <View className="space-y-3">
                    {students.map((student, index) => (
                        <View key={index} className="flex items-center justify-between p-3 border rounded-lg">
                            <View className="flex items-center space-x-3">
                                {getStatusIcon(student.status)}
                                <View className="font-medium">{student.name}</View>
                            </View>
                            <View className="flex items-center space-x-2">
                                {student.grade ? (
                                    <View className="text-lg font-bold text-blue-600">{student.grade}</View>
                                ) : (
                                    <TextInput placeholder="0.0" className="w-16 h-8 text-center" />
                                )}
                                <TouchableOpacity>
                                    {student.grade ? <Feather name="edit" size={24} color="black" /> : <Feather name="check-circle" size={24} color="black" />}
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </div>
    )
}