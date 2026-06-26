import { StyleSheet } from "react-native";
import { theme } from "@/theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.surface.bg,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerLeft: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: theme.text.primary,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    gap: 6,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  statusText: {
    fontSize: 16,
    fontWeight: "500",
    color: theme.text.muted,
  },
  favoriteButton: {
    padding: 8,
    marginLeft: 8,
  },
  section: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: theme.text.primary,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: theme.border.subtle,
  },
  label: {
    fontSize: 14,
    color: theme.text.muted,
  },
  value: {
    fontSize: 14,
    fontWeight: "500",
    flexShrink: 1,
    textAlign: "right",
    color: theme.text.primary,
  },
  episodeRow: {
    flexDirection: "row",
    paddingVertical: 6,
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: theme.border.subtle,
  },
  episodeCode: {
    fontSize: 12,
    fontWeight: "600",
    width: 60,
    color: theme.primary.main,
  },
  episodeName: {
    fontSize: 12,
    flex: 1,
    color: theme.text.primary,
  },
  episodeDate: {
    fontSize: 12,
    color: theme.text.subdued,
  },
});
