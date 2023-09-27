import { FlatList, Text } from "react-native";
import { movies } from "../data/movies";
import { Movie } from "./Movie";

export function FlatListDemo() {
  function handleRenderItem(movie) {
    return (
      <Movie title={movie.title} image={movie.image} tagline={movie.tagline} />
    );
  }

  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => handleRenderItem(item)}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <Text>---</Text>}
    />
  );
}
