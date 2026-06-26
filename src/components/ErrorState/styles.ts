import { StyleSheet } from "react-native";
import { theme } from "@/theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: theme.surface.bg,
  },
  message: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 8,
    color: theme.text.primary,
  },
  hint: {
    fontSize: 13,
    textAlign: "center",
    marginBottom: 20,
    color: theme.text.muted,
    lineHeight: 18,
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: theme.primary.main,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: theme.text.primary,
  },
});
