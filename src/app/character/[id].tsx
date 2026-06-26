import { Ionicons } from "@expo/vector-icons";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { Stack } from "expo-router";
import { useCharacterDetailController } from "./useCharacterDetailController";
import { styles } from "./styles";
import { theme } from "@/theme/colors";
import LoadingState from "@/components/LoadingState";
import ErrorState from "@/components/ErrorState";

const STATUS_COLOR = {
  Alive: theme.status.alive,
  Dead: theme.status.dead,
  unknown: theme.status.unknown,
} as const;

export default function CharacterDetailScreen() {
  const { character, loading, error, statusCode, refetch, isFavorite, toggleFavorite } =
    useCharacterDetailController();

  return (
    <>
      <Stack.Screen options={{ title: character?.name ?? "Character" }} />
      {loading ? <LoadingState /> : error || !character ? <ErrorState statusCode={statusCode} onRetry={() => refetch()} /> : (
      <ScrollView style={styles.container}>
        <Image source={{ uri: character.image }} style={styles.image} />

        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.name}>{character.name}</Text>
            <View style={styles.statusRow}>
              <View style={[styles.dot, { backgroundColor: STATUS_COLOR[character.status] }]} />
              <Text style={styles.statusText}>{character.status}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton} accessibilityLabel={isFavorite ? "Remove from favorites" : "Add to favorites"} accessibilityRole="button" testID="toggle-favorite">
            <Ionicons
              name={isFavorite ? "heart" : "heart-outline"}
              size={28}
              color={isFavorite ? theme.favorite.active : theme.text.subdued}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <InfoRow label="Species" value={character.species} />
          {character.type ? <InfoRow label="Type" value={character.type} /> : null}
          <InfoRow label="Gender" value={character.gender} />
          <InfoRow label="Origin" value={character.origin.name} />
          <InfoRow label="Location" value={character.location.name} />
          <InfoRow label="Created" value={new Date(character.created).toLocaleDateString()} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Episodes ({character.episode.length})</Text>
          {character.episode.map((ep) => (
            <View key={ep.id} style={styles.episodeRow}>
              <Text style={styles.episodeCode}>{ep.episode}</Text>
              <Text style={styles.episodeName}>{ep.name}</Text>
              <Text style={styles.episodeDate}>{ep.air_date}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      )}
    </>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}


