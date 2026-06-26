import { StyleSheet } from "react-native";
import { theme } from "@/theme/colors";

export const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: theme.surface.bg,
  },
  list: {
    padding: 8,
    gap: 8,
    backgroundColor: theme.surface.bg,
  },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    backgroundColor: theme.surface.bg,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
    color: theme.text.primary,
  },
  emptySub: {
    fontSize: 14,
    textAlign: "center",
    color: theme.text.muted,
  },
});
