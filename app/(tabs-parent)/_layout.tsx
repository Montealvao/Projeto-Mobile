import { AntDesign, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { View } from 'react-native'

export default function RootLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'orange',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
                height: 60,
            },
        }}>
            <Tabs.Screen
                name='home-parent'
                options={{
                    title: 'Início',
                    tabBarIcon: ({ color }) => (
                        <View className='flex-1 justify-center items-center'>
                            <MaterialIcons name='home' size={20} color={color} />
                        </View>
                    ),
                }}
            />,

            <Tabs.Screen
                name='grades-parent'
                options={{
                    title: 'Notas',
                    tabBarIcon: ({ color }) => (
                        <View className='flex-1 justify-center items-center'>
                            <AntDesign name="barschart" size={24} color={color} />
                        </View>
                    ),
                }}
            />,

            <Tabs.Screen
                name='schedule'
                options={{
                    title: 'Horários',
                    tabBarIcon: ({ color }) => (
                        <View className='flex-1 justify-center items-center'>
                            <Ionicons name="calendar-number-outline" size={24} color={color} />
                        </View>
                    ),
                }}
            />,

            <Tabs.Screen
                name='chat-parent'
                options={{
                    title: 'Chat',
                    tabBarIcon: ({ color }) => (
                        <View className='flex-1 justify-center items-center'>
                            <MaterialCommunityIcons name="comment-processing-outline" size={24} color={color} />
                        </View>
                    ),
                }}
            />,

            <Tabs.Screen
                name='announcements-parent'
                options={{
                    title: 'Avisos',
                    tabBarIcon: ({ color }) => (
                        <View className='flex-1 justify-center items-center'>
                            <Foundation name="megaphone" size={24} color={color} />
                        </View>
                    ),
                }}
            />,

            <Tabs.Screen
                name='profile-parent'
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color }) => (
                        <View className='flex-1 justify-center items-center'>
                            <MaterialIcons name='person' size={20} color={color} />
                        </View>
                    ),
                }}
            />
        </Tabs>
    )
}