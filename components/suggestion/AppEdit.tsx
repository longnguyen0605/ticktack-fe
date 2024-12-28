import { Modal, StyleSheet, Text,TouchableOpacity,View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SuggestionHeader from "./SuggestionHeader";
import AppItem from "../AppItem";
import { textStyle } from "@/theme/textStyle";
import { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { color } from "@/theme/color";
import { AddCircle } from "@/assets/icon/DesignPattern/AddCircle";
import AddAppModel from "./AddAppModel";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";


interface AppEditProps{
    id: number;
}

interface IAppData{
    id: string,
    appName: string,
    logoURL: string
}

const AppEdit = (props: AppEditProps) =>{

    const [appDataList , setAppDataList] = useState<IAppData[]>();
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    const [deleteName, setDeleteName] = useState("-1");

    const getAppDataList = async ( dataList: any[]) =>{

        const updatedData = dataList.map((item, index) => ({
            id: item.id,
            appName: item.name,
            logoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrAMz342ZIAScN8qmLsOXuv4nuYbh3pMK2jA&s"
          
          }));
        setAppDataList(updatedData);
        
    }


    const onAddModalClose = () =>{
        setIsAddModalVisible(false);
        fetchAppDataList();
    }
    const fetchAppDataList = async () =>{
        const token = await AsyncStorage.getItem('jwtToken');
        
        try {
            const response = await fetch(`https://ticktak-backend.onrender.com/category/${props.id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              },
            });
      
            if (response.ok) {
              const data = await response.json();
              getAppDataList(data.data)
              
            } else {
              
              throw new Error('Failed to fetch AppDataList');
              
            }
            
          } catch (error) {
            
            console.error('Error fetching AppDataList:', error);
          }
    

    }
    useEffect(()=>{
        fetchAppDataList();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            fetchAppDataList(); 
        }, [])
      );
   
    const onDeleteBtn = (name: string) => {
        setIsDeleteModalVisible(true);
        setDeleteName(name)
    }

    const onAddBtn = () =>{
        setIsAddModalVisible(true);
    }
    const handleDelete =  async () =>{
        if (deleteName==="-1") return;
        const token = await AsyncStorage.getItem('jwtToken');
        const response = await fetch(`https://ticktak-backend.onrender.com/my-app/${deleteName}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });
      
        if (!response.ok) {
        throw new Error('Failed to fetch MyAppList');
        }
        await fetchAppDataList();
    }


    const onNo = () =>{
        setIsDeleteModalVisible(false);
        setDeleteName("-1");
    }

    const onYes =  async() =>{
        await handleDelete();
        setIsDeleteModalVisible(false);
    }


    return(
        <SafeAreaView style={styles.container}>
            <SuggestionHeader searching/>
            <View style={styles.titleContainer}>
                <Text  style={{...textStyle.title,...styles.title}}>Edit your Category</Text>
                <TouchableOpacity style={styles.addBtn} onPress={onAddBtn}>
                    <AddCircle stroke={"#FFFFFF"}/>
                </TouchableOpacity>
            </View>
            <FlatList 
                showsVerticalScrollIndicator= {false}
                style={styles.itemContainer}
                data={appDataList}
                renderItem={({item}) => 
                    <AppItem 
                        id={item.id} 
                        appName={item.appName} 
                        logoURL = {item.logoURL}
                        description="Recommendation: 1 hour per day"
                        mode="delete"
                        onDelete={onDeleteBtn}
                    />
                }
            />
            

            <Modal
                visible={isDeleteModalVisible}    
                onRequestClose={()=>setIsDeleteModalVisible(false)}
                animationType="fade"
                presentationStyle="pageSheet"
                transparent
                
            >
                <View style={styles.overlay}>
                    <View style={styles.deleteModal}>
                        <Text style={styles.message}>Are You Sure To Remove It ?</Text>
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity style={styles.cancelButton} onPress={onNo}>
                                <Text style={styles.cancelText}>No</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.confirmButton} onPress={onYes}>
                                <Text style={styles.confirmText}>Yes</Text>
                            </TouchableOpacity>
                        </View> 
                    </View>
                </View>
                
            </Modal>

            <AddAppModel 
                categoryID={props.id}
                onRequestClose={onAddModalClose}
                visible={isAddModalVisible}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 25,
        flexDirection: "column",
        alignItems: "center",
        flex: 1
    },
    titleContainer:{
        alignItems:"center",
        width:"100%",
        
        marginTop:10,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent:"space-between"
    },

    title:{
        fontSize:27,
        
    },
    itemContainer:{
        width:"100%"
    },

    addBtn:{
        
        borderRadius:100,
        borderWidth: 1,
        borderColor: color.buttonBg,    
        width: 50,
        height: 50,
        backgroundColor: color.buttonBg,    
        justifyContent: "center",
        alignItems: "center"
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",  
        justifyContent: "center",
        alignItems: "center",
    },
    deleteModal:{
        width: 300,
        height: 200,
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


export default AppEdit;

