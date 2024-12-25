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


interface AppEditProps{
    id: number;
}

interface IAppData{
    id: number,
    appName: string,
    logoURL: string
}

const AppEdit = (props: AppEditProps) =>{

    const [appDataList , setAppDataList] = useState<IAppData[]>();
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    const [deleteId, setDeleteId] = useState(-1);

    const getAppDataList = () =>{
        setAppDataList([
            {id: 0, appName: "Youtube", logoURL: "https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png"},
            {id: 1, appName: "Facebook", logoURL: "https://png.pngtree.com/png-clipart/20181003/ourmid/pngtree-facebook-social-media-icon-facebook-logo-png-image_3654772.png"},
           {id: 2, appName: "Tiktok", logoURL: "https://banner2.cleanpng.com/20240214/lgr/transparent-tiktok-logo-tiktok-logo-music-streaming-app-entert-tiktok-logo-bright-t-with-sleek-1710878326897.webp"},
           
           
        ]);
    }
    useEffect(()=>{
        getAppDataList();
    }, []);
   
    const onDeleteBtn = (id: number) => {
        setIsDeleteModalVisible(true);
        setDeleteId(id)
    }

    const onAddBtn = () =>{
        setIsAddModalVisible(true);
    }
    const handleDelete = (id: number) =>{
        
    }


    const onNo = () =>{
        setIsDeleteModalVisible(false);
    }

    const onYes = () =>{
        handleDelete(deleteId);
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
                onRequestClose={setIsAddModalVisible}
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

