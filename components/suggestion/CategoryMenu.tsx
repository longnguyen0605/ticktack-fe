import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RootStackParamList from "./StackParamList";
import { GraduationCap } from "@/assets/icon/DesignPattern/GraduationCap";
import { textStyle } from "@/theme/textStyle";
import { color } from "@/theme/color";
import CategoryItem from "./CategoryItem";
import { ScrollView } from "react-native-gesture-handler";




const CategoryMenu = () =>{
    const iconList = [
        <GraduationCap />
    ];

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return(
        <SafeAreaView>
            <Text style={{...textStyle.normalTitle}}>Suggestion</Text>
            <ScrollView>
                <CategoryItem id = {0} name={"study"} icon={iconList[0]}/>
            </ScrollView>
            
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container:{

    },

    title:{

    },
    
    itemContainer:{

    }
}); 


export default CategoryMenu;