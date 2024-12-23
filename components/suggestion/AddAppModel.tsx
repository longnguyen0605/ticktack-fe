import { color } from "@/theme/color";
import { Modal, View, StyleSheet , Text, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Dropdown } from "react-native-element-dropdown";



interface AddAppModelProps{
    visible: boolean,
    onRequestClose: React.Dispatch<React.SetStateAction<boolean>>
}

const AddAppModel =  (props: AddAppModelProps) =>{

    const fakeData = [
        {label: "App 1", value: "1"},
        {label: "App 2", value: "2"},
    ]
    const onCancel = () =>{
        props.onRequestClose(false)
    }

    const onAdd = () =>{

    }


    return(
        <Modal
            visible={props.visible}    
            onRequestClose={()=>props.onRequestClose(false)}
            animationType="fade"
            transparent
            
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.message}>Add New App</Text>
                    <View >
                        <Text >Your app</Text>
                         <Dropdown 
                            data={fakeData}
                            labelField="label"
                            valueField="value"
                            onChange={()=>{}}
                         />
                         <Text >Recommendation Usage</Text>
                            <Dropdown 
                                data={fakeData}
                                labelField="label"
                                valueField="value"
                                onChange={()=>{}}
                            />
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.confirmButton} onPress={onAdd}>
                            <Text style={styles.confirmText}>Add</Text>
                        </TouchableOpacity>
                    </View> 
                </View>
            </View> 
            

        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",  
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer:{
        width: 300,
        height: 300,
        borderWidth:1,
        borderRadius:10,
        backgroundColor:"white",
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        top:"auto",
        bottom:"auto"   
    },
    message: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color:color.primary, 
      },
      buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginTop:10,
      },
      cancelButton: {
        width: 100,
        marginRight: 10,
        padding: 10,
        backgroundColor: "#e0e0e0",
        borderRadius: 5,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        
      },
      confirmButton: {
        width: 100,
        marginLeft: 10,
        padding: 10,
        backgroundColor: "#f44336",
        borderRadius: 5,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
      },
      cancelText: {
        color: "#000",
        fontWeight: "bold",
      },
      confirmText: {
        color: "#fff",
        fontWeight: "bold",
      },
});


export default AddAppModel;