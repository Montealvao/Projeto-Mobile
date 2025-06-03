import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { Message } from '../../components/alerts/message';

export default function Chat() {
    return (
        <View className="flex-1 p-4 gap-6 bg-white">
            <Text className="text-2xl font-bold ">Conversas</Text>

            <ScrollView>
                <View className="pb-14 gap-3">
                    <Message
                        name="Prof. João (Matemática)"
                        time="09:15"
                        message="A prova será na próxima sexta"
                        quantity={5000}
                    />

                    <Message
                        name="Prof. Maria (Ciências)"
                        time="ontem"
                        message="Alguém tem o material de história?"
                        quantity={0}
                    />

                    <Message
                        name="Secretaria"
                        time="20/02/2016"
                        message="Documentos prontos para retirar"
                        quantity={10}
                    />

                    <Message
                        name="Prof. Ana (Português)"
                        time="ontem"
                        message="Parabéns pelo trabalho!"
                        quantity={0}
                    />
                </View>
            </ScrollView>
        </View>
    )
}