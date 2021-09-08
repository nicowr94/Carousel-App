import React, { useEffect, useState, useRef } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Card from "./Card";

const { width } = Dimensions.get("window");
const SPACING = 10;
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;

const Loading = () => (
  <View style={styles.loadingContainer}>
    <Text style={styles.paragraph}>Loading...</Text>
  </View>
);

export default function Carousel({ list }) {
  const [sites, setSites] = useState([]);
  const [position, setPosition] = useState(1);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const sites = [...list];
      // Add empty items to create fake space
      // [empty_item, ...sites, empty_item]
      setSites([{ key: "empty-left" }, ...sites, { key: "empty-right" }]);
    };

    if (sites.length === 0) {
      fetchData(sites);
    }
  }, [sites]);

  if (sites.length === 0) {
    return <Loading />;
  }

  const nextItem = (dir) => {
    let newPosition = position;
    if (flatListRef.current) {
      if (dir) {
        if (position < sites.length - 3) newPosition = position + 1;
      } else {
        if (position > 0) newPosition = position - 1;
      }

      flatListRef.current.scrollToIndex({
        index: newPosition,
        Animated: true,
      });
      setPosition(newPosition);
    }
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        data={sites}
        keyExtractor={(item) => item.key}
        horizontal
        bounces={false}
        decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
        renderToHardwareTextureAndroid
        contentContainerStyle={{ alignItems: "center" }}
        snapToInterval={ITEM_SIZE}
        snapToAlignment="start"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        getItemLayout={(data, index) => ({
          length: ITEM_SIZE,
          offset: ITEM_SIZE * index,
          index,
        })}
        renderItem={({ item, index }) => {
          if (!item.image) {
            return <View style={{ width: EMPTY_ITEM_SIZE }} />;
          }

          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [100, 50, 100],
            extrapolate: "clamp",
          });

          return (
            <View style={{ width: ITEM_SIZE }}>
              <Animated.View
                style={{
                  marginHorizontal: SPACING,
                  padding: SPACING * 2,
                  alignItems: "center",
                  transform: [{ translateY }],
                  backgroundColor: "white",
                  borderRadius: 34,
                }}
              >
                <Card key={item.key} title={item.title} image={item.image} />
              </Animated.View>
            </View>
          );
        }}
      />
      <View style={styles.container_buttons}>
        <TouchableOpacity
          style={styles.carousel_button}
          onPress={() => nextItem(false)}
        >
          <Text> Back item </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.carousel_button}
          onPress={() => nextItem(true)}
        >
          <Text> Next item </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: 500,
  },
  content: {
    backgroundColor: "blue",
    width: "100%",
  },
  container_buttons: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "black",
  },

  carousel_button: {
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: 120,
  },
});
