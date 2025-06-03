import { AntDesign, Feather } from "@expo/vector-icons"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"

export default function ParentAnnouncements() {
    const announcements = [
        {
            type: "urgent",
            title: "Reunião de Pais - 9º Ano B",
            content:
                "Reunião marcada para sexta-feira às 19h no auditório principal. Presença obrigatória para discussão do desempenho do 3º bimestre.",
            date: "Hoje",
            category: "Evento",
            from: "Coordenação",
        },
        {
            type: "info",
            title: "Novo Horário da Biblioteca",
            content:
                "A biblioteca funcionará das 7h às 17h a partir da próxima semana. Novos livros disponíveis para empréstimo.",
            date: "Ontem",
            category: "Comunicado",
            from: "Biblioteca",
        },
        {
            type: "event",
            title: "Feira de Ciências 2024",
            content:
                "Inscrições abertas para a Feira de Ciências 2024. Prazo até 15/03. Sua filha Maria demonstrou interesse em participar.",
            date: "2 dias atrás",
            category: "Evento",
            from: "Prof. Pedro",
        },
        {
            type: "grade",
            title: "Boletim do 3º Bimestre",
            content: "O boletim do 3º bimestre já está disponível. Maria obteve média geral de 8.7. Parabéns!",
            date: "3 dias atrás",
            category: "Notas",
            from: "Secretaria",
        },
    ]

    const getTypeColor = (type: string) => {
        switch (type) {
            case "urgent":
                return "border border-red-200 bg-red-50 rounded-lg"
            case "event":
                return "border border-blue-200 bg-blue-50 rounded-lg"
            case "grade":
                return "border border-green-200 bg-green-50 rounded-lg"
            default:
                return "border border-gray-200 bg-white rounded-lg"
        }
    }

    const getCategoryColor = (category: string) => {
        switch (category) {
            case "Evento":
                return "bg-blue-100 text-blue-800"
            case "Comunicado":
                return "bg-gray-100 text-gray-800"
            case "Notas":
                return "bg-green-100 text-green-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    return (
        <ScrollView>

            <View className="p-4 pb-20">
                <View className="mb-6">
                    <Text className="text-2xl font-bold text-gray-800">Avisos e Comunicados</Text>
                    <Text className="text-gray-600">Informações sobre Maria Silva Santos</Text>
                </View>

                <View className="space-y-4">
                    {announcements.map((announcement, index) => (
                        <View key={index} className={`p-4 ${getTypeColor(announcement.type)}`}>
                            <View className="flex flex-row justify-between items-start mb-2">
                                <View className="flex flex-row items-center space-x-2">
                                    <View
                                        className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(announcement.category)}`}
                                    >
                                        {announcement.category}
                                    </View>
                                    {announcement.type === "urgent" && <Feather name="alert-triangle" size={20} color="orange" />}
                                </View>
                                <View className="text-xs text-gray-500">{announcement.date}</View>
                            </View>

                            <Text className="font-bold text-lg mb-2">{announcement.title}</Text>
                            <Text className="text-gray-700 text-sm mb-3">{announcement.content}</Text>

                            <View className="flex flex-row justify-between items-center">
                                <View className="text-xs text-gray-500">De: {announcement.from}</View>
                                <TouchableOpacity className="flex flex-row items-center gap-3 bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm font-semibold ">
                                    <AntDesign name="filetext1" size={16} color="black" />
                                    Ver Completo
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}