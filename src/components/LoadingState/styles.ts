import { StyleSheet } from "react-native";
import { theme } from "@/theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.surface.bg,
  },
  gif: {
    width: 250,
    height: 250,
  },
});
