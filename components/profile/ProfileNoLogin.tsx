import { color } from "@/theme/color";
import { textStyle } from "@/theme/textStyle";
import { useRouter } from "expo-router";
import { StyleSheet, View , Text, Image, Button, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



const ProfileNoLogin = () => {


    const router = useRouter();

    const handleLogin = () =>{
        router.push("/(auth)/login")
    }

    const handleContact = () =>{
        router.navigate("/contactUs")
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={{...textStyle.title, ...styles.title}}>Profile</Text>
                
            </View> 
            <Image
                source={require("../../assets/images/ProfilePic.png")} 
                style={styles.image}
            />
            <Text style={{...textStyle.title, fontSize:24}}>Do you want to login?</Text>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn}
                    onPress={handleLogin}
                >
                    <Text style={{...styles.btnText, color:"white"}}>Login Now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.btn, backgroundColor:"white"}} 
                    onPress={handleContact}
                >
                    <Text style={{...styles.btnText, color:color.primary}}>Contact Us</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 25,
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        backgroundColor:"white"
    },
    titleContainer:{
        width: "100%",
        height: 60,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:20,
    },
    title:{
        
        fontSize: 30,
    },
    image:{
        width: 300,
        height: 300,
    },
    btnContainer:{
        width:"100%",
        marginTop: 20,  
        justifyContent:"center",
        alignItems:"center"
    },
    btn:{
        shadowColor: "#000",
        shadowOffset: { width: 0    , height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        width: "100%",
        height: 55,
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: color.primaryBg,
        backgroundColor: color.primary,
        justifyContent:"center",
        alignItems:"center"
        
    },
    btnText:{
        fontSize: 16,
        textAlign:"center"
    }
})

export default ProfileNoLogin;