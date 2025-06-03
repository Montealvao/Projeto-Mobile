import { Feather } from "@expo/vector-icons"
import { useState } from "react"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"

export default function ParentCommunicationScreen() {
    const [activeTab, setActiveTab] = useState("messages")

    const messages = [
        {
            from: "Prof. João (Matemática)",
            subject: "Desempenho da Maria",
            preview: "Gostaria de parabenizar o excelente desempenho...",
            date: "Hoje",
            unread: true,
        },
        {
            from: "Secretaria",
            subject: "Reunião de Pais",
            preview: "Lembramos que a reunião será na próxima sexta...",
            date: "Ontem",
            unread: false,
        },
        {
            from: "Prof. Ana (Português)",
            subject: "Trabalho de Literatura",
            preview: "A Maria entregou um excelente trabalho sobre...",
            date: "2 dias atrás",
            unread: false,
        },
    ]

    const teachers = [
        { name: "Prof. João Oliveira", subject: "Matemática", phone: "(11) 99999-1234", email: "joao@escola.com" },
        { name: "Prof. Ana Costa", subject: "Português", phone: "(11) 99999-5678", email: "ana@escola.com" },
        { name: "Prof. Carlos Silva", subject: "História", phone: "(11) 99999-9012", email: "carlos@escola.com" },
        { name: "Prof. Maria Santos", subject: "Geografia", phone: "(11) 99999-3456", email: "maria@escola.com" },
    ]

    return (
        <ScrollView>

            <View className="p-4 pb-20">
                <View className="mb-6">
                    <Text className="text-2xl font-bold text-gray-800">Comunicação</Text>
                </View>

                {/* Tabs */}
                <View className="flex flex-row mb-6 bg-gray-200 rounded-lg p-1 text-center">
                    <TouchableOpacity
                        onPress={() => setActiveTab("messages")}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${activeTab === "messages" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600"
                            }`}
                    >
                        Mensagens
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setActiveTab("teachers")}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${activeTab === "teachers" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600"
                            }`}
                    >
                        Professores
                    </TouchableOpacity>
                </View>

                {activeTab === "messages" && (
                    <View className="space-y-3">
                        {messages.map((message, index) => (
                            <View
                                key={index}
                                className={`p-4 border border-gray-300 rounded-lg cursor-pointer bg-white hover:bg-gray-50 ${message.unread ? "border border-blue-200 rounded-lg bg-blue-50" : ""}`}
                            >
                                <View className="flex flex-row justify-between items-start mb-2">
                                    <Text className={`font-semibold ${message.unread ? "font-bold" : ""}`}>{message.from}</Text>
                                    <View className="text-xs text-gray-500">{message.date}</View>
                                </View>
                                <Text className={`text-sm mb-1 ${message.unread ? "font-medium" : ""}`}>{message.subject}</Text>
                                <Text className="text-sm text-gray-600">{message.preview}</Text>
                                {message.unread && (
                                    <View className="mt-2">
                                        <View className="bg-blue-600 w-14 rounded-xl p-1 text-white font-semibold text-sm text-center">Nova</View>
                                    </View>
                                )}
                            </View>
                        ))}
                    </View>
                )}

                {activeTab === "teachers" && (
                    <View className="space-y-4">
                        {teachers.map((teacher, index) => (
                            <View key={index} className="bg-white p-6 rounded-md border border-gray-300 space-y-6">
                                <View>
                                    <Text className="font-bold text-lg">{teacher.name}</Text>
                                    <Text className="text-gray-600 text-base">{teacher.subject}</Text>
                                </View>

                                <View className="space-y-2 mb-4">
                                    <View className="flex flex-row gap-2 items-center text-sm">
                                        <Feather name="phone" size={20} color="gray" />
                                        <View>{teacher.phone}</View>
                                    </View>
                                    <View className="flex flex-row gap-2 items-center text-sm">
                                        <Feather name="mail" size={20} color="gray" />
                                        <View>{teacher.email}</View>
                                    </View>
                                </View>

                                <View className="flex flex-row space-x-2">
                                    <TouchableOpacity className="flex-1 gap-2 flex-row border border-gray-200 rounded-md p-2 text-sm font-semibold items-center justify-center">
                                        <Feather name="message-square" size={20} color="black" />
                                        Mensagem
                                    </TouchableOpacity>
                                    <TouchableOpacity className="flex-1 gap-2 flex-row border border-gray-200 rounded-md p-2 text-sm font-semibold items-center justify-center">
                                        <Feather name="phone" size={20} color="gray" />
                                        Ligar
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </View>
                )}
            </View>
        </ScrollView>
    )
}