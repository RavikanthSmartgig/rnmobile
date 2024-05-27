import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  ScrollView,
  FlatList,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { MUSIC_DATA } from "@/constants/info";
import Card from "@/components/cards";

export default function HomeScreen() {
  return (
    <View style={{ margin: 10, paddingTop: 20 }}>
      {/* <ScrollView>
        {MUSIC_DATA.map((item) => (
          <Card
            title={item.title}
            artist={item.artist}
            duration={item.duration}
            genre={item.genre}
          />
        ))}
      </ScrollView> */}
      <FlatList
        data={MUSIC_DATA}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            artist={item.artist}
            duration={item.duration}
            genre={item.genre}
          />
        )}
        // initialScrollIndex={10}
        // refreshing
        // onRefresh={() => {
        //   console.log("refersh");
        // }}
        ItemSeparatorComponent={({ highlighted }) => (
          <View
            style={[
              {
                borderColor: "red",
                width: "100%",
                borderWidth: 1,
                height: 1,
              },
              highlighted && { marginLeft: 0 },
            ]}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
