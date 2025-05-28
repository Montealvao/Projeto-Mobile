import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { Message } from '../../components/alerts/message';

export default function Chat() {
    return (
        <View className="flex-1 relative bg-white">
            <View className="p-4 w-full bg-blue-600 flex flex-row items-center gap-3 border-b-2 border-blue-700">
                <FontAwesome6 name="message" size={20} color="white" />
                <Text className="text-2xl font-bold text-white">Conversas</Text>
            </View>

            <ScrollView>
            <View className="pb-14 gap-3 p-4">

                <Message 
                    name="Rafael Germinari"
                    time="09:15"
                    message="Que isso? Vai tomano esse não atendido"
                    quantity={5000}
                />

                <Message 
                    name="Montealvares Freitas do Nascimento"
                    time="ontem"
                    message="carai josué, manda o pr logo aaaaaaaaaaaaa"
                    quantity={0}
                />

                <Message 
                    name="Kayke"
                    time="20/02/2016"
                    message="Oh José, cadê os card?"
                    quantity={10}
                />

                <Message 
                    name="Montealvares Freitas do Nascimento"
                    time="ontem"
                    message="carai josué, manda o pr logo aaaaaaaaaaaaa"
                    quantity={0}
                />

                <Message 
                    name="Rafael Germinari"
                    time="09:15"
                    message="Que isso? Vai tomano esse não atendido"
                    quantity={5}
                />

                <Message 
                    name="Montealvares Freitas do Nascimento"
                    time="ontem"
                    message="carai josué, manda o pr logo aaaaaaaaaaaaa"
                    quantity={0}
                />
                
                <Message 
                    name="Rafael Germinari"
                    time="09:15"
                    message="Que isso? Vai tomano esse não atendido"
                    quantity={5}
                />

            </View>
            </ScrollView>
        </View>
    )
}