import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"; 
import Icon from '@expo/vector-icons/AntDesign'; 



export default function ListProduct({data, addToCart}){

   

    return(
        <View style={styles.container}>

            <View style={styles.product}>
                 <Text style={styles.name}>{data.nome}</Text>
                 <Text style={styles.price}>R$ {data.preco}</Text>     
            </View>
            

            <View style={styles.priceView}>
                <Text style={styles.description}>{data.descricao}</Text>
                <TouchableOpacity onPress={addToCart}>
                    <Icon name="pluscircle" size={30} color="#333"/>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 10,
        margin: 10,
        borderRadius: 5,
        backgroundColor: "#fff"
    },

    product: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#236ee8"
    },
    price:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#236ee8"
    },

    description:{
        fontSize: 18,
        color: "#333"
    },
    priceView:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10
    }
  
})