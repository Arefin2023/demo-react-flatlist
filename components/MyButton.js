import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export function MyButton({ title, onPress }) {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPress={() => onPress()}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <View style={{ padding: 5 }}>
        <View
          style={{
            padding: 20,
            backgroundColor: pressed ? "#6b5ca5" : "#71a9f7",
            borderRadius: 15,
          }}
        >
          <Text>{title}</Text>
        </View>
      </View>
    </Pressable>
  );
}
