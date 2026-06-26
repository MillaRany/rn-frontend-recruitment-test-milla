import { TextInput, View } from "react-native";
import { theme } from "@/theme/colors";
import { styles } from "./styles";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

export default function SearchBar({ value, onChangeText }: SearchBarProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search characters..."
        placeholderTextColor={theme.input.placeholder}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        accessibilityLabel="Search characters"
        accessibilityRole="search"
      />
    </View>
  );
}


