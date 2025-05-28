import { View, Text } from 'react-native';

interface Card {
    type: string
    day: string
    title: string
    description: string
}

export function AlertsCard({type, day, title, description} : Card) {
    return (
        <View className="bg-white rounded-md p-6 m-2 border border-gray-300">
            <View className="flex-row justify-between mb-1">
                <Text className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full">
                    {type}
                </Text>

                <Text className="text-gray-500 text-xs font-bold">{day}</Text>
            </View>

            <Text className="text-lg font-bold text-gray-800 mb-1">{title}</Text>
            <Text className="text-sm text-gray-600">{description}</Text>
        </View>
    );
}