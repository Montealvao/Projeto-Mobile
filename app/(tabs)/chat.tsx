import { View, Text, ScrollView } from "react-native";
import { Card, CardTitle, CardDescription } from '../../components/chat/card.tsx';

export default function Chat() {
    return (
        <View className="flex-1 relative bg-white">
            <View className="p-4 w-full">
                <Text className="text-2xl font-bold">Conversas</Text>
            </View>

            <ScrollView>
                <View className="flex-1 w-full h-full p-4">
                    <Card className="mb-4">
                        <CardTitle>Prof. João (Matemática)</CardTitle>
                        <CardDescription>A prova será na próxima sexta</CardDescription>
                    </Card>
                </View>
            </ScrollView>
        </View>
    )
}