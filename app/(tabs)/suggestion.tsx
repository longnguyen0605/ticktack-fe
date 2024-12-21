import CategoryMenu from "@/components/suggestion/CategoryMenu";
import React from "react";
import { ScrollView } from "react-native";


export default function SuggestionScreen(){
    return(
        <ScrollView>
            <CategoryMenu/>
        </ScrollView>
    );
    
}