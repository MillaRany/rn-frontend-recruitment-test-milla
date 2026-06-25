import { StyleSheet } from "react-native";
import { theme } from "@/theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: theme.surface.bg,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
    color: theme.text.primary,
  },
  card: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: theme.surface.card,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
    color: theme.text.primary,
  },
  sampleNote: {
    fontSize: 12,
    color: theme.text.muted,
    marginBottom: 8,
    fontStyle: "italic",
  },
  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },
  statLabel: {
    fontSize: 14,
    color: theme.text.muted,
  },
  statValue: {
    fontSize: 14,
    fontWeight: "500",
    color: theme.text.primary,
  },
});
