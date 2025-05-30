import { Foundation, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
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
                name='home'
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
                name='subjects'
                options={{
                    title: 'Matérias',
                    tabBarIcon: ({ color }) => (
                        <View className='flex-1 justify-center items-center'>
                            <MaterialCommunityIcons name="bookshelf" size={24} color="black" />
                        </View>
                    ),
                }}
            />,
           
            <Tabs.Screen
                name='chat'
                options={{
                    title: 'Chat',
                    tabBarIcon: ({ color }) => (
                        <View className='flex-1 justify-center items-center'>
                            <MaterialCommunityIcons name="comment-processing-outline" size={24} color="black" />
                        </View>
                    ),
                }}
            />,
            
            <Tabs.Screen
                name='announcements'
                options={{
                    title: 'Avisos',
                    tabBarIcon: ({ color }) => (
                        <View className='flex-1 justify-center items-center'>
                            <Foundation name="megaphone" size={24} color="black" />
                        </View>
                    ),
                }}
            />,

            <Tabs.Screen
                name='profile'
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