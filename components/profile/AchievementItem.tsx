import { Play } from "@/assets/icon/DesignPattern/Play";
import { textStyle } from "@/theme/textStyle";
import { Image, StyleSheet , Text, TouchableOpacity, View} from "react-native";
import { color } from "@/theme/color";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { DeleteCircle } from "@/assets/icon/DesignPattern/DeleteCircle";
import ProfileParamList from "@/app/(profile)/_paramList";

interface AchievementItemProps{
    id: number,
    achievementName : string,
    threshHold: number, 
    currProcess: number,

    height?: number,
    bgColor?: string,
   

    
}

const AchievementItem = (props: AchievementItemProps) =>{

    const navigator = useNavigation<StackNavigationProp<ProfileParamList>>();
    
    const complete: boolean = props.currProcess >= props.threshHold;
    
    return(
        <View style={{...styles.container,
                        backgroundColor: complete? color.primaryBg : color.grayBg ,
                        height: props.height ? props.height : "auto",}} 
        >
        
        <Text style={{...textStyle.title, ...styles.title,}}>{props.achievementName}</Text>
        <Text style={{...textStyle.subText, ...styles.subtitle}}>
            (
            <Text style={{fontWeight:"bold"}}>{props.currProcess}</Text>    
            /{props.threshHold})
        </Text>

        
        </View>    
    )

}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent:"space-between",
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
        width:"100%",
        
        
    },
    logoContainer: {
        marginRight: 16,
        justifyContent: "center",
        alignItems: "center",
        
    },
    textContainer: {
        flex: 1,
        
    },
    title: {
        fontSize: 16,
        
        
    },
    subtitle: {
        fontSize: 14,
        color: color.primary,
    },
});

export default AchievementItem;  