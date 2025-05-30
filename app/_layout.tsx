import { Stack, router, useSegments } from "expo-router"
import { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import './globals.css'

function AuthGate({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('token')
      if (!token) {
        router.replace("/")
      }
      setLoading(false)
    };
    checkAuth()
  }, []);

  if (loading) {
    return (
      <Stack screenOptions={{ headerShown: false }} />
    );
  }

  return <>{children}</>
}

export default function RootLayout() {
  return (
    <AuthGate>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs-aluno)" />
        <Stack.Screen name="(tabs-professor)" />
        <Stack.Screen name="(tabs-gestor)" />
      </Stack>
    // </AuthGate>
  );
}