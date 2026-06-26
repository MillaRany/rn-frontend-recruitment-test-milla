import { StyleSheet } from "react-native";
import { theme } from "@/theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.surface.bg,
  },
  list: {
    padding: 8,
    gap: 8,
  },
});
