import { StyleSheet } from "react-native";
import { theme } from "@/theme/colors";

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "column",
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: theme.surface.card,
  },
  imageWrapper: {
    position: "relative",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  info: {
    flex: 1,
    padding: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    color: theme.text.primary,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 4,
  },
  statusText: {
    fontSize: 12,
    color: theme.text.muted,
  },
  location: {
    fontSize: 11,
    marginTop: 2,
    color: theme.text.subdued,
  },
  favoriteButton: {
    position: "absolute",
    top: 6,
    right: 6,
    zIndex: 1,
    padding: 4,
  },
});
