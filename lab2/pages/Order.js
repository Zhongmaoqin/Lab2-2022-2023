import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function MovieDetail({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          marginBottom: 50,
          fontWeight: "bold",
          color: "deepskyblue",
        }}
      >
        This is Order page
      </Text>
    </View>
  );
}

export default MovieDetail;
