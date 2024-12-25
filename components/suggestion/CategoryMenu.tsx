import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SuggestionParamList from "@/app/(suggestion)/_paramList";
import { GraduationCap } from "@/assets/icon/DesignPattern/GraduationCap";
import { textStyle } from "@/theme/textStyle";
import { color } from "@/theme/color";
import CategoryItem from "./CategoryItem";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { LargeSuitcase } from "@/assets/icon/DesignPattern/LargeSuitcase";
import { PlaystationGamepad } from "@/assets/icon/DesignPattern/PlaystationGamepad";
import { Swimming } from "@/assets/icon/DesignPattern/Swimming";
import { MenuScale } from "@/assets/icon/DesignPattern/MenuScale";




const CategoryMenu = () =>{
    const iconList = [
        <GraduationCap stroke={color.primary}/>,
        <LargeSuitcase stroke={color.primary}/>,
        <PlaystationGamepad stroke={color.primary}/>,
        <Swimming stroke={color.primary}/>,   
        <MenuScale stroke={color.primary}/>

    ];

    const categoryData :{id: number, categoryName:string, categoryInfo:string, icon: JSX.Element}[]= [
        {
            id: 0, categoryName: "Study", categoryInfo:"Document, Testing App", icon: iconList[0]
        },
        {
            id: 1, categoryName: "Work", categoryInfo:"Communication, Time Management App", icon: iconList[1]
        },
        {
            id: 2, categoryName: "Relax", categoryInfo:"Gaming, Social and Entertainment App", icon: iconList[2]
        },
        {
            id: 3, categoryName: "Sport", categoryInfo:"Running, Yoga and other Sport App", icon: iconList[3]
        },
        {
            id: 4, categoryName: "Other", categoryInfo:"Other useful App", icon: iconList[4]
        },

    ];

    const navigation = useNavigation<NavigationProp<SuggestionParamList>>();
    return(
        <SafeAreaView style={styles.container}>
            <Text style={{...textStyle.normalTitle, ...styles.title}}>Suggestion</Text>
            <FlatList 
                showsVerticalScrollIndicator={false}
                style={styles.itemContainer}
                data={categoryData}
                renderItem={({item}) => 
                    <CategoryItem 
                        id={item.id} 
                        categoryName={item.categoryName} 
                        categoryInfo={item.categoryInfo} 
                        icon = {item.icon}
                    />
                }
            />
            
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 25
    },

    title:{
        marginTop:30,
    },
    
    itemContainer:{
        marginTop:  30,
         width:"100%"
    }
}); 


export default CategoryMenu;