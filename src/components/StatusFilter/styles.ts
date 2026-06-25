import { StyleSheet } from "react-native";
import { theme } from "@/theme/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 4,
    gap: 8,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: theme.chip.bg,
  },
  chipSelected: {
    backgroundColor: theme.chip.bgSelected,
  },
  chipText: {
    fontSize: 14,
    color: theme.chip.text,
  },
  chipTextSelected: {
    color: theme.chip.textSelected,
    fontWeight: "700",
  },
});
