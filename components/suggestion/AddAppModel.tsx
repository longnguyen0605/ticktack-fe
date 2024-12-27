import { color } from "@/theme/color";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Modal, View, StyleSheet , Text, TouchableOpacity, TextInput } from "react-native";
import { Dropdown } from "react-native-element-dropdown";



interface AddAppModelProps{
    visible: boolean,
    onRequestClose: ()=>void,
    categoryID: number;
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
    const [myAppList, setMyAppList] = useState<{name:string, image?:string}[]>([]);

    const onCancel = () =>{
        props.onRequestClose()
    }

    const putApp = async (token:string|null) =>{
        const response = await fetch(`https://ticktak-backend.onrender.com/app`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify([
                {name: appName, image:"hello.com"}
            ])
          });
        if (!response.ok) throw Error("Cannot PUT app ")
    }

    const putMyApp = async (token: string | null) => {
        try {
          // Clear the current list
          setMyAppList([]);
      
          // Fetch existing apps
          const response = await fetch(`https://ticktak-backend.onrender.com/my-app`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });
      
          if (!response.ok) {
            throw new Error('Failed to fetch MyAppList');
          }
      
          const data = await response.json();
          const fetchedDataList = data.data.map((item: any) => ({
            name: item.app.name,
            image: item.app.image,
          }));
      
          // Add to the state
          let updatedList = [...fetchedDataList];
      
          // Check if the app already exists, and add it if not
          if (!updatedList.some(obj => obj.name === appName)) {
            updatedList = [...updatedList, { name: appName, image: 'hello.com' }];
          }
      
          // Update the state
          setMyAppList(updatedList);
      
          // Send updated list back to the server
          const response1 = await fetch(`https://ticktak-backend.onrender.com/my-app`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(updatedList),
          });
      
          if (!response1.ok) {
            throw new Error('Failed to update MyAppList on the server');
          }
      
          console.log('MyAppList updated successfully');
        } catch (error:any) {
          console.error(error.message);
        }
      };

    const onAdd = async () =>{
 
        const token = await AsyncStorage.getItem('jwtToken');
        try{
            
            await putApp(token)
            await putMyApp(token);

            const response2 = await fetch(`https://ticktak-backend.onrender.com/my-app/${appName}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    categoryId: props.categoryID.toString(), 
                    recomendUsage : time.toString()
                  })
              });
             
              if (!response2.ok) throw Error("Cannot post my-app");
        }
        catch(error){
                console.log(error)
        }

        // 
        onCancel();
        
    }
    

    return(
        <Modal
            visible={props.visible}    
            onRequestClose={()=>props.onRequestClose()}
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