import { color } from "@/theme/color";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Modal, View, StyleSheet , Text, TouchableOpacity, TextInput } from "react-native";
import { Dropdown } from "react-native-element-dropdown";



interface AddAppModelProps{
    visible: boolean,
    onRequestClose: React.Dispatch<React.SetStateAction<boolean>>
}

const   AddAppModel =  (props: AddAppModelProps) =>{

    const timeData = [
        {label: "15", value: 15},
        {label: "20", value: 20},
        {label: "25", value: 25},
        {label: "30", value: 30},
        {label: "35", value: 35},
        {label: "40", value: 40},
        {label: "45", value: 45},
        {label: "50", value: 50},
        {label: "55", value: 55},
        {label: "60", value: 60}
    ]

    const [appName, setAppName] = useState('');
    const [time, setTime] = useState(15);

    const onCancel = () =>{
        props.onRequestClose(false)
    }

    const onAdd = async () =>{
        const token = await AsyncStorage.getItem('jwtToken');
        const response = await fetch(`https://ticktak-backend.onrender.com/my-app/${appName}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({
            categoryId: '1', // truyền categoryId
            recommendedUsage: time
          })
        });
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
                        <View>
                            <View>
                                <Text style={{color: color.primary, fontWeight: 'bold'}}>Your app</Text>
                            </View>
                            <TextInput
                                style={{borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 12, borderColor: 'transparent', backgroundColor: '#f0f0f0'}}
                                placeholder="App name"
                                placeholderTextColor="#888"
                                value={appName}
                                onChangeText={setAppName}
                            />
                        </View>

                        <View>
                         <Text style={{color: color.primary, fontWeight: 'bold'}}>Recommendation Usage</Text>
                            <Dropdown 
                            style={{borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 12, borderColor: 'transparent', backgroundColor: '#f0f0f0'}}
                                data={timeData}
                                placeholder="Select time"
                                labelField="label"
                                valueField="value"
                                value={{label: time.toString(), value: time}}
                                onChange={(e)=>{setTime(e.value)}}
                            />
                        </View>
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
        backgroundColor: color.primary,
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