import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface MessageProps extends TouchableOpacityProps {
    name: string;
    time: string;
    message: string;
    quantity: number;
}

export function Message({ name, time, message, quantity, ...rest }: MessageProps) {
    return (
        <TouchableOpacity className="w-full" {...rest}>
            <View className="flex-row border border-black/10 rounded-xl p-3 gap-2 items-center shadow-md shadow-black/10">
                <View className="w-10 h-10 bg-blue-600 items-center justify-center rounded-full">
                    <Text className="font-semibold text-white text-lg">{name[0]}</Text>
                </View>

                <View className="flex-1 flex-col gap-1">
                    <View className="flex-row justify-between items-center">
                        <Text className="font-semibold text-lg flex-1" numberOfLines={1}>
                            {name}
                        </Text>
                        
                        <Text className="text-sm text-black/50 ml-2">{time}</Text>
                    </View>

                    <Text className="text-black/50 text-sm font-medium" numberOfLines={1}>
                        {message}
                    </Text>
                </View>

                {quantity > 0 && (
                    <View className="p-2">
                        <View className="w-4 h-4 p-3 rounded-full bg-blue-600 items-center justify-center">
                            <Text className="text-white text-sm font-bold">{quantity > 99 ? '99+' : quantity}</Text>
                        </View>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    )
}