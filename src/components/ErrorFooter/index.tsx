import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { mapErrorMessage } from "@/utils/errorMapper";

interface ErrorFooterProps {
  statusCode?: number | null;
  onRetry?: () => void;
}

export default function ErrorFooter({ statusCode, onRetry }: ErrorFooterProps) {
  const mapped = mapErrorMessage(statusCode);

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{mapped.message}</Text>
      <Text style={styles.hint}>{mapped.hint}</Text>
      {onRetry && (
        <TouchableOpacity style={styles.button} onPress={onRetry} accessibilityLabel="Try again" accessibilityRole="button">
          <Text style={styles.buttonText}>Try again</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
