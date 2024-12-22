import { Play } from "@/assets/icon/DesignPattern/Play";
import { textStyle } from "@/theme/textStyle";
import { Image, StyleSheet , Text, TouchableOpacity, View} from "react-native";
import { color } from "@/theme/color";
import Logo from "../ui/Logo";

interface AppItemProps{
    id: number,
    appName: string,
    logoURL: string
}

const AppItem = (props: AppItemProps) =>{

    
    const handleBtnPress = ()=>{

    }
    return(
    <View style={styles.container}>

        <View style={styles.logoContainer}>
            <Image 
                source={{uri: props.logoURL}}
                style={styles.Logo}
            />
        </View>


        <View style={styles.textContainer}>
        <Text style={{...textStyle.title, ...styles.title,}}>{props.appName}</Text>
            <Text style={{...textStyle.subText, ...styles.subtitle,}}>Recommendation: 1 hour per day</Text>
        </View>

        <TouchableOpacity 
            onPress={handleBtnPress}
        >
            <Play  height={30} width={30} stroke={color.primary} />
        </TouchableOpacity>
        
    </View>    
    )

}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: color.primaryBg,
        borderRadius: 12,
        padding: 16,
        marginVertical: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        width:"100%"
        
    },
    logoContainer: {
        marginRight: 16,
        justifyContent: "center",
        alignItems: "center",
        
    },
    Logo:{
        height: 40,
        width: 40,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        
        
    },
    subtitle: {
        fontSize: 12,
        
    },
});

export default AppItem;