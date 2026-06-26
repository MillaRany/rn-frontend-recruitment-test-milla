import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import type { StatusFilter } from "@/types/character";

interface StatusFilterProps {
  selected: StatusFilter;
  onSelect: (status: StatusFilter) => void;
}

const STATUSES: StatusFilter[] = ["All", "Alive", "Dead", "unknown"];

export default function StatusFilter({ selected, onSelect }: StatusFilterProps) {
  return (
    <View style={styles.container}>
      {STATUSES.map((status) => (
        <TouchableOpacity
          key={status}
          style={[styles.chip, selected === status && styles.chipSelected]}
          onPress={() => onSelect(status)}
          accessibilityLabel={`Filter by ${status}`}
          accessibilityRole="button"
          accessibilityState={{ selected: selected === status }}
        >
          <Text style={[styles.chipText, selected === status && styles.chipTextSelected]}>
            {status}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}


