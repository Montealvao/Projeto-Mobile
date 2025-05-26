import { AlertsCard } from "@/components/cardAvisos"
import { View, Text } from "react-native"



export default function Alertas() {
    return (
        <View className="p-4 pb-20">
            <View className="mb-6">
                <Text className="text-2xl font-bold text-gray-800">Avisos e comunicados</Text>
            </View>

        <AlertsCard type="evento" day="hoje" title="asdkakwdkaskdkawkda" description="aksdkwakdkakdwkdkakdwkada"/>

    
            
        </View >
    )
}

