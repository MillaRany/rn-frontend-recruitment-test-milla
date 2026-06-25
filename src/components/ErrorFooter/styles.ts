import { StyleSheet } from "react-native";
import { theme } from "@/theme/colors";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  message: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 4,
    color: theme.text.primary,
  },
  hint: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 12,
    color: theme.text.muted,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: theme.primary.main,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: theme.text.primary,
  },
});
