import AsyncStorage from "@react-native-async-storage/async-storage";
import { db } from "../firebase.config"
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useUserInfo() {
    const [userData, setUserData] = useState<any>(null);

    useEffect(() => {
        async function getData() {
            try {
                const value = await AsyncStorage.getItem("token")
                if (value !== null) {
                    const user = doc(db, "users", value);
                    const userSnapshot = await getDoc(user);
                    if (userSnapshot.exists()) {
                        const data = userSnapshot.data();
                        setUserData(data);
                    }
                }
            } catch (e) {
                console.error("Error fetching data from AsyncStorage:", e);
            }
        }
        getData();
    }, []);

    return { userData };

}