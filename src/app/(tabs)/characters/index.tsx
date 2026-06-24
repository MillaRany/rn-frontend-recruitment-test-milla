import type { ApolloError } from "@apollo/client";
import { FlatList, View } from "react-native";
import CharacterCard from "../../../components/CharacterCard";
import ErrorFooter from "../../../components/ErrorFooter";
import ErrorState from "../../../components/ErrorState";
import LoadingFooter from "../../../components/LoadingFooter";
import LoadingState from "../../../components/LoadingState";
import SearchBar from "../../../components/SearchBar";
import StatusFilter from "../../../components/StatusFilter";
import { useFavoritesStore } from "../../../store/useFavoritesStore";
import { styles } from "./styles";
import { useCharactersController } from "./useCharactersController";

export default function CharactersScreen() {
  const {
    characters,
    loading,
    paginating,
    error,
    paginateError,
    statusCode,
    search,
    status,
    handleLoadMore,
    handleSearch,
    handleStatusChange,
    handleCharacterPress,
    refetch,
  } = useCharactersController();

  const { ids, toggle } = useFavoritesStore();

  if (loading && !characters.length) return <LoadingState />;

  if (error && !characters.length) {
    return <ErrorState statusCode={statusCode} onRetry={() => refetch()} />;
  }

  return (
    <View style={styles.container}>
      <SearchBar value={search} onChangeText={handleSearch} />
      <StatusFilter selected={status} onSelect={handleStatusChange} />
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CharacterCard
            character={item}
            isFavorite={ids.includes(item.id)}
            onPress={() => handleCharacterPress(item.id)}
            onToggleFavorite={() => toggle(item.id)}
          />
        )}
        numColumns={2}
        columnWrapperStyle={{ gap: 8 }}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        contentContainerStyle={styles.list}
        ListFooterComponent={
          paginateError && characters.length > 0 ? (
            <ErrorFooter
              statusCode={((paginateError as ApolloError)?.networkError as any)?.statusCode}
            />
          ) : loading ? <LoadingFooter /> : null
        }
      />
    </View>
  );
}
