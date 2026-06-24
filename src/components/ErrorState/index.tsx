import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { mapErrorMessage } from "../../utils/errorMapper";

interface ErrorStateProps {
  statusCode?: number | null;
  onRetry?: () => void;
}

export default function ErrorState({
  statusCode,
  onRetry,
}: ErrorStateProps) {
  const mapped = mapErrorMessage(statusCode);

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{mapped.message}</Text>
      <Text style={styles.hint}>{mapped.hint}</Text>
      {onRetry && (
        <TouchableOpacity style={styles.button} onPress={onRetry}>
          <Text style={styles.buttonText}>Try again</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}


