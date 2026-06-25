import { useCallback, useMemo } from "react";
import { FlatList, View } from "react-native";
import CharacterCard from "@/components/CharacterCard";
import ErrorState from "@/components/ErrorState";
import ListFooter from "@/components/ListFooter";
import LoadingState from "@/components/LoadingState";
import SearchBar from "@/components/SearchBar";
import StatusFilter from "@/components/StatusFilter";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import { extractStatusCode } from "@/utils/error";
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

  const favoritesSet = useMemo(() => new Set(ids), [ids]);

  const renderItem = useCallback(
    ({ item }: { item: (typeof characters)[number] }) => (
      <CharacterCard
        character={item}
        isFavorite={favoritesSet.has(item.id)}
        onPress={() => handleCharacterPress(item.id)}
        onToggleFavorite={() => toggle(item.id)}
      />
    ),
    [favoritesSet, handleCharacterPress, toggle],
  );

  const paginateErrorCode = useMemo(() => {
    if (!paginateError) return null;
    return extractStatusCode(paginateError);
  }, [paginateError]);

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
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{ gap: 8 }}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        contentContainerStyle={styles.list}
        refreshing={loading}
        onRefresh={refetch}
        accessibilityLabel="Characters list"
        accessibilityRole="list"
        ListFooterComponent={
          <ListFooter
            loading={paginating}
            error={!!paginateError}
            hasData={characters.length > 0}
            statusCode={paginateErrorCode}
            onRetry={handleLoadMore}
          />
        }
      />
    </View>
  );
}
