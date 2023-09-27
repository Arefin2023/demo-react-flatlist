import { Text, View } from "react-native";
import { Image } from "expo-image";

export function Movie({ title, image, tagline }) {
  return (
    <View>
      <Text style={{ fontSize: 24 }}>{title}</Text>
      <Image source={image} style={{ width: 100, height: 100 }} />
      <Text>{tagline}</Text>
    </View>
  );
}
