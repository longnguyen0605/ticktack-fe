import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Menu, MenuOption, MenuOptions, MenuTrigger, MenuProvider } from "react-native-popup-menu";
import { Settings } from "@/assets/icon/DesignPattern/Settings";
import { LongArrowDownRight } from "@/assets/icon/DesignPattern/LongArrowDownRight";
import { SendMail } from "@/assets/icon/DesignPattern/SendMail";
import { color } from "@/theme/color";


interface SettingPopupMenuProps{
    handleLogout: () => void,
    handleContact: () => void,
}
const SettingPopupMenu = (props: SettingPopupMenuProps) =>{

    const onLogoutBtn = () =>{

    }

    const onContactBtn = () =>{

    }
    return (
        (
                <View style={styles.container}>
                    <Menu>
                    <MenuTrigger  > 
                        <Settings/>
                    </MenuTrigger>
                    <MenuOptions  
                        customStyles={{ optionsContainer: styles.menuOptions }}
                    >
                        <MenuOption 
                            onSelect={() => onLogoutBtn()}
                            style={styles.menuOption}
                        >                       
                                <Text style={styles.text}>Logout</Text>
                                <LongArrowDownRight stroke={color.subText}/>                                            
                        </MenuOption>
                        <MenuOption onSelect={() => onContactBtn()} 
                            style={styles.menuOption}    
                        >
                            <Text style={styles.text}>Contact</Text>
                            <SendMail stroke={color.subText}/>
                        </MenuOption>
                        
                    </MenuOptions>
                    </Menu>
                </View>
            
    )
)

}

const styles = StyleSheet.create({
    container: {
       borderWidth: 1,
       borderRadius: 30,
       borderColor: color.grayBg,
       width:40,
       height: 40,
       justifyContent:"center",
       alignItems:"center",
       backgroundColor: color.grayBg
    },
    menuOptions:{
        width:120,
        borderRadius: 10,
        paddingHorizontal:10,
        marginTop:30,
    },

    menuOption: {
        flex:1,
        flexDirection:"row", 
        justifyContent:"space-between",
        
    },
    text:{
        color:color.subText
    }
});
export default SettingPopupMenu;