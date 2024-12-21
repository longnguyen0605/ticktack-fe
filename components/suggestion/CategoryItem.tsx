import { StyleSheet, Image,View, Button, Text, Touchable, TouchableOpacity } from "react-native";
import { color } from "@/theme/color";
import { PlaystationGamepad } from "@/assets/icon/DesignPattern/PlaystationGamepad"
import { MinusCircle } from "@/assets/icon/DesignPattern/MinusCircle";
import { NavArrowRight } from "@/assets/icon/DesignPattern/NavArrowRight";
import React from "react";
import { textStyle } from "@/theme/textStyle";

interface CategoryItemProps{
    id: number,
    categoryName: string,
    categoryInfo: string,
    icon: JSX.Element,

}



const CategoryItem = (props: CategoryItemProps) =>{
    let modIcon = <MinusCircle/>
    if (props.icon){
        modIcon = React.cloneElement(props.icon, {...styles.icon})
    }
    
    return(
        <View style={styles.container}>
            {/* Icon on the left */}
            <View style={styles.iconContainer}>{modIcon}</View>

            {/* Texts in the middle */}
            <View style={styles.textContainer}>
            <Text style={{...textStyle.title, ...styles.title,}}>{props.categoryName}</Text>
                <Text style={{...textStyle.subText, ...styles.subtitle,}}>{props.categoryInfo}</Text>
            </View>

            {/* Chevron on the right */}
            <TouchableOpacity>
                <NavArrowRight  height={30} width={30} stroke={color.primary} />
            </TouchableOpacity>
            
        </View>    
    );

}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#E7E9FE",
        borderRadius: 12,
        padding: 16,
        marginVertical: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        
    },
    iconContainer: {
        marginRight: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    icon:{
        height: 40,
        width: 40,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        
        
    },
    subtitle: {
        fontSize: 14,
        
    },
});

export default CategoryItem;