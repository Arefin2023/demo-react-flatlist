import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollViewDemo } from "./components/ScrollViewDemo";
import { useState } from "react";
import { FlatListDemo } from "./components/FlatListDemo";
import { MyButton } from "./components/MyButton";

export default function App() {
  const [display, setDisplay] = useState("flat-list-demo");

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          {display === "scroll-list-demo" ? (
            <ScrollViewDemo />
          ) : (
            <FlatListDemo />
          )}
        </View>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 30,
            marginLeft: 20,
            marginRight: 20,
            justifyContent: "space-around",
          }}
        >
          <MyButton
            title="Scroll List"
            onPress={() => setDisplay("scroll-list-demo")}
          />
          <MyButton
            title="Flat List"
            onPress={() => setDisplay("flat-list-demo")}
          />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
