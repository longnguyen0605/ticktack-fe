import { Play } from "@/assets/icon/DesignPattern/Play";
import { textStyle } from "@/theme/textStyle";
import { Image, StyleSheet , Text, TouchableOpacity, View} from "react-native";
import { color } from "@/theme/color";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import SuggestionParamList from "@/app/(suggestion)/_paramList";
import { DeleteCircle } from "@/assets/icon/DesignPattern/DeleteCircle";

interface AppItemProps{
    id: string,
    appName?: string,
    description?: string,
    logoURL?: string,
    height?: number,
    bgColor?: string,
    mode?: "none" | "select" | "delete",
    onDelete?: (id:string) => void 
    
}

const AppItem = (props: AppItemProps) =>{

    const navigator = useNavigation<StackNavigationProp<SuggestionParamList>>();
    
    const selectPlanning =() =>{
        navigator.navigate('appPlanning', {appId:props.id})
    }

    const handleDelete = () => {
        if (props.appName && props.mode=="delete" && props.onDelete) props.onDelete(props.appName);
    }

    const handleBtnPress = ()=>{
        if (!props.mode || props.mode=="none"){
            return;
        }
        
        if (props.mode=="select"){
            selectPlanning();
        }
        
        if (props.mode=="delete"){
            handleDelete();
        }
        
    }
    return(
        <View style={{...styles.container,
                        backgroundColor: props.bgColor || color.primaryBg ,
                        height: props.height ? props.height : "auto",}} 
        >

        <View style={styles.logoContainer}>
            <Image 
                source={{uri: props.logoURL}}
                style={styles.Logo}
            />
        </View>


        <View style={styles.textContainer}>
        <Text style={{...textStyle.title, ...styles.title,}}>{props.appName}</Text>
            <Text style={{...textStyle.subText, ...styles.subtitle,}}>{props.description}</Text>
        </View>
        
        <TouchableOpacity 
            onPress={handleBtnPress}
        >       
            {props.mode=="select" && <Play  height={30} width={30} stroke={color.primary} />}
            {props.mode=="delete" && <DeleteCircle  height={30} width={30} stroke={color.subText} />}
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