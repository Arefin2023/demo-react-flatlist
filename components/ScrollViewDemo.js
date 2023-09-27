import { ScrollView, Text, View } from "react-native";
import { Movie } from "./Movie";
import { movies } from "../data/movies";

export function ScrollViewDemo() {
  return (
    <View>
      <ScrollView>
        <Text>Header</Text>
        {movies.map((movie, index) => {
          return (
            <View key={movie.id}>
              <Movie
                title={movie.title}
                image={movie.image}
                tagline={movie.tagline}
              />
              <Text>{movies.length - index > 1 ? "----------" : null}</Text>
            </View>
          );
        })}
        <Text>Footer</Text>
      </ScrollView>
    </View>
  );
}
