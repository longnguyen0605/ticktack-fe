import { color } from "@/theme/color";
import { textStyle } from "@/theme/textStyle";
import { useRouter } from "expo-router";
import { StyleSheet, View , Text, Image, Button, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



const ContactUs = () => {

    const router = useRouter();
    const handleBackHome = () =>{
        router.navigate("/(tabs)/home");
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={{...textStyle.title, ...styles.title}}>Contact Us</Text>
                
            </View> 
            <Image
                source={require("../../assets/images/ProfilePic.png")} 
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.label}>
                    Email:{" "} 
                <Text style={styles.link} >
                    ticktack.support@gmail.com
                </Text>
                </Text>
                <Text style={styles.label}>
                    Phone:{" "}  
                    <Text style={styles.link} >
                    19001969
                    </Text>
                </Text>
            </View>
            
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={handleBackHome}>
                    <Text style={{...styles.btnText, color:"white"}}>Back to Home</Text>
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
    },
    textContainer: {
        padding: 16,
        
    },
    label: {
        fontSize: 18,
        marginBottom: 20,
        color: color.primary,
        fontWeight:"bold",
        
    },
    link: {
        color: color.subText, // Blue color for links
        fontSize: 16,
    },
})

export default ContactUs;