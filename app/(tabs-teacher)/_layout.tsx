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
                name='home-teacher'
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
                name='class'
                options={{
                    title: 'Turmas',
                    tabBarIcon: ({ color }) => (
                        <View className='flex-1 justify-center items-center'>
                            <MaterialCommunityIcons name="bookshelf" size={24} color={color} />
                        </View>
                    ),
                }}
            />,
           
            <Tabs.Screen
                name='chat-teacher'
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
                name='announcements-teacher'
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
                name='profile-teacher'
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