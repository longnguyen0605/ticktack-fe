import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RootStackParamList from "./StackParamList";



const CategoryMenu = () =>{
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return(
        <SafeAreaView>
            <Text>This is Category Menu</Text>
            <Text
                onPress={()=>navigation.navigate('s2')}
            >Go go</Text>
        </SafeAreaView>
    );

}

export default CategoryMenu;