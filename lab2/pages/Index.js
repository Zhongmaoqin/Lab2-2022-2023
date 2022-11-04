import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function MovieList({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#fff' }}>
      <Text
        style={{
          fontSize: 20,
          marginBottom: 50,
          fontWeight: 'bold',
          color: 'deepskyblue'
        }}
      >
        This is Index,you can buy phone
      </Text>
      <TouchableOpacity onPress={() => {
          navigation.navigate('Order')
      }} style={{
          backgroundColor: 'deepskyblue',
          paddingHorizontal: 20,
          paddingVertical: 5,
          borderRadius: 5
      }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#FFF',
  
          }}
        >
          Buy Phone
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default MovieList;
