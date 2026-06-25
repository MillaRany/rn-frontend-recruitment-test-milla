import { Ionicons } from "@expo/vector-icons";
import { theme } from "@/theme/colors";
import type { Character } from "@/types/character";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDoubleTap } from "@/hooks/useDoubleTap";
import { styles } from "./styles";

const STATUS_COLOR = {
  Alive: theme.status.alive,
  Dead: theme.status.dead,
  unknown: theme.status.unknown,
} as const;

interface CharacterCardProps {
  character: Character;
  isFavorite: boolean;
  onPress: () => void;
  onToggleFavorite: () => void;
}

export default function CharacterCard({
  character,
  isFavorite,
  onPress,
  onToggleFavorite,
}: CharacterCardProps) {
  const handlePress = useDoubleTap(onPress, onToggleFavorite);

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress} activeOpacity={0.8} accessibilityLabel={character.name} accessibilityRole="button">
      <View style={styles.imageWrapper}>
        <Image source={{ uri: character.image }} style={styles.image} />
        <TouchableOpacity style={styles.favoriteButton} onPress={onToggleFavorite} accessibilityLabel={isFavorite ? "Remove from favorites" : "Add to favorites"} accessibilityRole="button">
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={20}
            color={isFavorite ? theme.favorite.active : theme.overlay.light}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>
          {character.name}
        </Text>
        <View style={styles.statusRow}>
          <View
            style={[
              styles.statusDot,
              { backgroundColor: STATUS_COLOR[character.status] },
            ]}
          />
          <Text style={styles.statusText}>
            {character.status} — {character.species}
          </Text>
        </View>
        <Text style={styles.location} numberOfLines={1}>
          {character.origin.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}