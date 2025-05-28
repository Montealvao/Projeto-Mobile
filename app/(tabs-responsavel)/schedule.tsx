import { Feather } from "@expo/vector-icons"
import { ScrollView, Text, View } from "react-native"

export default function ParentSchedule() {
    const schedule = {
        Segunda: [
            { time: "07:30", subject: "Matemática", teacher: "Prof. João", room: "Sala 15" },
            { time: "08:20", subject: "Português", teacher: "Prof. Ana", room: "Sala 12" },
            { time: "09:10", subject: "História", teacher: "Prof. Carlos", room: "Sala 18" },
            { time: "10:20", subject: "Geografia", teacher: "Prof. Maria", room: "Sala 10" },
        ],
        Terça: [
            { time: "07:30", subject: "Ciências", teacher: "Prof. Pedro", room: "Lab 1" },
            { time: "08:20", subject: "Inglês", teacher: "Prof. Sarah", room: "Sala 14" },
            { time: "09:10", subject: "Matemática", teacher: "Prof. João", room: "Sala 15" },
            { time: "10:20", subject: "Ed. Física", teacher: "Prof. Roberto", room: "Quadra" },
        ],
    }

    const upcomingTests = [
        { subject: "Matemática", type: "Prova", date: "20/03", time: "14:00", topics: "Equações do 2º grau" },
        { subject: "História", type: "Seminário", date: "22/03", time: "08:20", topics: "Segunda Guerra Mundial" },
        { subject: "Ciências", type: "Trabalho", date: "25/03", time: "23:59", topics: "Sistema Solar" },
    ]

    return (
        <ScrollView>

            <View className="p-4 pb-20">
                <View className="mb-6">
                    <Text className="text-2xl font-bold text-gray-800">Horários e Agenda</Text>
                    <Text className="text-gray-600 text-base">Maria Silva Santos - 9º Ano B</Text>
                </View>

                {/* Próximas Avaliações */}
                <View className="mb-6 bg-white p-6 rounded-md border border-gray-300 space-y-6">
                    <View>
                        <View className="text-lg flex flex-row font-semibold gap-2 items-center">
                            <Feather name="alert-triangle" size={24} color="orange" />
                            Próximas Avaliações
                        </View>
                    </View>
                    <View className="space-y-3">
                        {upcomingTests.map((test, index) => (
                            <View key={index} className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                                <View className="flex flex-row justify-between items-start mb-2">
                                    <View>
                                        <View className="font-semibold">{test.subject}</View>
                                        <View className="text-sm text-gray-600">{test.type}</View>
                                    </View>
                                    <View className="text-orange-600 border border-orange-600 font-semibold text-sm px-2 rounded-xl">
                                        {test.date}
                                    </View>
                                </View>
                                <View className="text-sm text-gray-600">
                                    <View>Horário: {test.time}</View>
                                    <view>Conteúdo: {test.topics}</view>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Horário Semanal */}
                <View className="bg-white p-6 rounded-md border border-gray-300 space-y-6">
                    <View>
                        <View className="text-lg flex flex-row gap-2 font-semibold items-center">
                            <Feather name="calendar" size={24} color="black" />
                            Horário Semanal
                        </View>
                    </View>
                    <View>
                        {Object.entries(schedule).map(([day, classes]) => (
                            <View key={day} className="mb-4">
                                <Text className="font-bold text-lg mb-3 text-blue-600">{day}-feira</Text>
                                <View className="space-y-2">
                                    {classes.map((classItem, index) => (
                                        <View key={index} className="flex flex-row items-center justify-between p-2 bg-gray-50 rounded">
                                            <View className="flex flex-row items-center space-x-3">
                                                <View className="text-sm font-semibold w-12">{classItem.time}</View>
                                                <View>
                                                    <View className="font-semibold text-sm">{classItem.subject}</View>
                                                    <View className="text-xs text-gray-600">{classItem.teacher}</View>
                                                </View>
                                            </View>
                                            <View className="text-xs text-gray-500">{classItem.room}</View>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}