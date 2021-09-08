import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Card({ image, title }) {
  return (
    <View style={styles.container_card}>
      <Image style={styles.image_card} source={{ uri: image }} />
      <Text style={styles.title_card}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container_card: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    width: 250,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  title_card: {
    padding: 24,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  image_card: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
