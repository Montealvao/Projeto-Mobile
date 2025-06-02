import { db } from "../../firebase.config";
import useUserInfo from "@/hooks/useUserInfo";
import {
    AntDesign,
    Feather,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

export default function ParentHome() {
    const { userData } = useUserInfo()
    const [studentData, setStudentData] = useState<any>(null);

    console.log("User Data: ", userData);



    useEffect(() => {
        async function getDataStudent() {
            if (!userData) return;
            const studentRef = query(collection(db, "students"), where("id_parent", "==", userData.id_parent));
            const studentSnapshot = await getDocs(studentRef);
            if (studentSnapshot.empty) {
                console.log("No students found for this parent.");
                return;
            }
            const studentDataId = studentSnapshot.docs[0].id
            console.log("Student Data: ", studentDataId);

            const studentDoc = query(collection(db, "users"), where("id_student", "==", studentDataId));
            const studentDocSnapshot = await getDocs(studentDoc);
            if (studentDocSnapshot.empty) {
                console.log("No user data found for the student.");
                return;
            }
            const userStudentDataId = studentDocSnapshot.docs[0].id;
            console.log("User Student Data ID: ", userStudentDataId);

            const userStudent = doc(db, "users", userStudentDataId);
            const userStudentSnapshot = await getDoc(userStudent);
            if (!userStudentSnapshot.exists()) {
                console.log("No user data found for the student.");
                return;
            }
            const userStudentData = userStudentSnapshot.data();
            console.log("User Student Data: ", userStudentData);
            setStudentData(userStudentData);

            const classroomId = userStudentData.id_classroom;

        }
        getDataStudent();
        console.log("Student Data: ", studentData);
    }, [userData]);



    const studentInfo = {
        name: "Maria Silva Santos",
        class: "9º Ano B",
        overallGrade: 8.7,
        attendance: 95,
    };

    const recentActivities = [
        {
            subject: "Matemática",
            type: "Prova",
            grade: 8.5,
            date: "15/03",
            status: "graded",
        },
        {
            subject: "Português",
            type: "Trabalho",
            grade: null,
            date: "18/03",
            status: "pending",
        },
        {
            subject: "História",
            type: "Seminário",
            grade: 9.0,
            date: "12/03",
            status: "graded",
        },
    ];

    const upcomingEvents = [
        { title: "Prova de Ciências", date: "20/03", time: "14:00" },
        { title: "Reunião de Pais", date: "25/03", time: "19:00" },
    ];

    return (
        <ScrollView>
            <View className="p-4 pb-20">
                <View className="mb-6">
                    <Text className="text-2xl font-bold text-gray-800">
                        Olá, Sr(a). {userData?.name}!
                    </Text>
                    <Text className="text-gray-600 text-lg">
                        Acompanhe o progresso do(a) {studentData?.name}
                    </Text>
                </View>

                {/* Card do Aluno */}
                <View className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                    <View className="p-4 border border-blue-200 rounded-lg">
                        <View className="flex flex-row items-center space-x-4">
                            <View className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                                <MaterialIcons name="person" size={24} color="white" />
                            </View>
                            <View className="flex-1">
                                <Text className="font-bold text-lg">{studentData?.name}</Text>
                                <Text className="text-gray-600 text-base">
                                    {studentInfo.class}
                                </Text>
                                <View className="flex flex-row items-center space-x-4 mt-2">
                                    <View className="flex flex-row gap-2 items-center">
                                        <AntDesign name="staro" size={24} color="orange" />
                                        <Text className="font-medium">
                                            {studentInfo.overallGrade}
                                        </Text>
                                    </View>
                                    <View className="flex flex-row gap-2 items-center">
                                        <Feather name="check-circle" size={24} color="green" />
                                        <Text className="font-medium">
                                            {studentInfo.attendance}% presença
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Cards de Resumo */}
                <View className="grid grid-cols-2 gap-4 mb-6">
                    <View className="p-4 bg-green-50 border border-green-300 rounded-lg">
                        <View className="text-center">
                            <View className="text-2xl font-bold text-green-600">8</View>
                            <View className="text-sm text-gray-600">Matérias</View>
                        </View>
                    </View>
                    <View className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <View className="text-center">
                            <View className="text-2xl font-bold text-blue-600">3</View>
                            <View className="text-sm text-gray-600">Atividades</View>
                        </View>
                    </View>
                    <View className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                        <View className="text-center">
                            <View className="text-2xl font-bold text-orange-600">2</View>
                            <View className="text-sm text-gray-600">Avisos</View>
                        </View>
                    </View>
                    <View className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                        <View className="text-center">
                            <View className="text-2xl font-bold text-purple-600">1</View>
                            <View className="text-sm text-gray-600">Mensagens</View>
                        </View>
                    </View>
                </View>

                {/* Atividades Recentes */}
                <View className="mb-6 bg-white p-6 rounded-md border border-gray-300 space-y-6">
                    <View>
                        <View className="text-lg font-semibold flex flex-row gap-4 items-center">
                            <MaterialCommunityIcons
                                name="clipboard-check-outline"
                                size={24}
                                color="black"
                            />
                            Atividades Recentes
                        </View>
                    </View>
                    <View className="space-y-3">
                        {recentActivities.map((activity, index) => (
                            <View
                                key={index}
                                className="flex flex-row items-center justify-between p-3 bg-gray-50 rounded-lg"
                            >
                                <View>
                                    <View className="font-semibold">{activity.subject}</View>
                                    <View className="text-sm text-gray-600">
                                        {activity.type} • {activity.date}
                                    </View>
                                </View>
                                <View className="text-right">
                                    {activity.grade ? (
                                        <View className="text-lg font-bold text-blue-600">
                                            {activity.grade}
                                        </View>
                                    ) : (
                                        <View>
                                            <Text>Pendente</Text>
                                        </View>
                                    )}
                                </View>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Próximos Eventos */}
                <View className="bg-white p-6 rounded-md border border-gray-300 space-y-6">
                    <View>
                        <View className="text-lg flex flex-row gap-4 font-semibold items-center">
                            <Feather name="calendar" size={24} color="black" />
                            Próximos Eventos
                        </View>
                    </View>
                    <View className="space-y-3">
                        {upcomingEvents.map((event, index) => (
                            <View
                                key={index}
                                className="flex flex-row items-center justify-between p-3 bg-yellow-50 rounded-lg"
                            >
                                <View>
                                    <View className="font-semibold">{event.title}</View>
                                    <View className="text-sm text-gray-600">
                                        {event.date} às {event.time}
                                    </View>
                                </View>
                                <Feather name="clock" size={24} color="orange" />
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
