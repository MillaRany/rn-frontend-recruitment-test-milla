import { Text, View } from "react-native";
import { mapErrorMessage } from "../../utils/errorMapper";
import { theme } from "../../theme/colors";
import { styles } from "./styles";

interface ErrorFooterProps {
  statusCode?: number | null;
}

export default function ErrorFooter({ statusCode }: ErrorFooterProps) {
  const { message, hint } = mapErrorMessage(statusCode);

  return (
    <View style={styles.container}>
      <Text style={[styles.message, { color: theme.text.subdued }]}>{message}</Text>
      <Text style={[styles.hint, { color: theme.text.subdued }]}>{hint}</Text>
    </View>
  );
}
