import { AddCircle } from "@/assets/icon/DesignPattern/AddCircle";
import { color } from "@/theme/color";
import { textStyle } from "@/theme/textStyle";
import React from "react";
import { StyleSheet, Touchable, TouchableOpacity } from "react-native";
import { View , Text} from "react-native";

interface ShowTabProps{
    children?: React.ReactNode;
    title: string;
    onOpenBtn?: ()=>void;
}

const ShowTab: React.FC<ShowTabProps> = ({ children, ...props }) => {

    const onOpenBtn  = () =>{
        if(props.onOpenBtn) props.onOpenBtn();
    }

    return(
        <View style={styles.container}>
            <View style={{flexDirection:"row", justifyContent:"space-between", width:"100%",
                            alignItems:"center"

            }}>
                <Text style={{...textStyle.title, ...styles.title}}>{props.title}</Text>
                <TouchableOpacity style={styles.openBtn} onPress={onOpenBtn}>
                    <AddCircle stroke={color.primary} width={25} height={25}/>
                </TouchableOpacity>
            </View>

            <View style={styles.contentContainer}>
                {children}
            </View>
            
        </View>
    );
}


const styles = StyleSheet.create({

    container:{
        shadowColor: "#000",
        shadowOffset: { width: 0    , height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        borderWidth: 1,
        borderRadius: 20,
        borderColor:"white",
        width: "100%",
        paddingHorizontal:20,
        backgroundColor:"white",

    },
    title:{
        fontSize:24,

    },
    openBtn:{
        width: 24,
        height: 24,     
    },
    contentContainer:{
        width:"100%",
        marginTop:15,   
        marginBottom:15,
    }
});


export default ShowTab;