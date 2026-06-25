import { StyleSheet } from "react-native";
import { theme } from "@/theme/colors";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  input: {
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: theme.surface.card,
    color: theme.text.primary,
  },
});
