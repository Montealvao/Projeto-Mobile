import { Text, View } from "react-native"

export default function Announcements() {
    const announcements = [
        {
            type: "urgent",
            title: "Reunião de Pais",
            content: "Reunião marcada para sexta-feira às 19h no auditório principal.",
            date: "Hoje",
            category: "Evento",
        },
        {
            type: "info",
            title: "Novo Horário da Biblioteca",
            content: "A biblioteca funcionará das 7h às 17h a partir da próxima semana.",
            date: "Ontem",
            category: "Comunicado",
        },
        {
            type: "event",
            title: "Feira de Ciências",
            content: "Inscrições abertas para a Feira de Ciências 2024. Prazo até 15/03.",
            date: "2 dias atrás",
            category: "Evento",
        },
        {
            type: "info",
            title: "Cardápio da Semana",
            content: "Confira o novo cardápio da cantina para esta semana.",
            date: "3 dias atrás",
            category: "Comunicado",
        },
    ]

    const getTypeColor = (type: string) => {
        switch (type) {
            case "urgent":
                return "border border-red-200 bg-red-50 rounded-lg"
            case "event":
                return "border border-blue-200 bg-blue-50 rounded-lg"
            default:
                return "border border-gray-200 bg-white rounded-lg"
        }
    }

    const getCategoryColor = (category: string) => {
        switch (category) {
            case "Evento":
                return "bg-blue-100 text-blue-800"
            case "Comunicado":
                return "bg-green-100 text-green-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    return (
        <View className="p-4 pb-20">
            <View className="mb-6">
                <Text className="text-2xl font-bold text-gray-800">Avisos e Comunicados</Text>
            </View>

            <View className="space-y-4">
                {announcements.map((announcement, index) => (
                    <View key={index} className={`p-4 ${getTypeColor(announcement.type)}`}>
                        <View className="flex flex-row justify-between items-start mb-2">
                            <View className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(announcement.category)}`}>
                                {announcement.category}
                            </View>
                            <View className="text-xs text-gray-500">{announcement.date}</View>
                        </View>
                        <Text className="font-bold text-lg mb-2">{announcement.title}</Text>
                        <Text className="text-gray-700 text-sm">{announcement.content}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}