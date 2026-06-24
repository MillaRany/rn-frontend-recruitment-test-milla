import { Text, View, ScrollView } from "react-native";
import { useStatsController } from "./useStatsController";
import { styles } from "./styles";
import LoadingState from "../../../components/LoadingState";
import ErrorState from "../../../components/ErrorState";
import { percentage } from "../../../utils/percentage";

export default function StatsScreen() {
  const { stats, loading, error, refetch } = useStatsController();

  if (loading) return <LoadingState />;
  if (error || !stats) return <ErrorState onRetry={() => refetch()} />;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Statistics</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Overall</Text>
        <StatRow label="Total Characters" value={stats.totalCharacters.toLocaleString()} />
        <StatRow label="Total Pages" value={stats.totalPages.toLocaleString()} />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Status Distribution (Page 1)</Text>
        <StatRow
          label="Alive"
          value={`${stats.statusCount.Alive} (${percentage(stats.statusCount.Alive, stats.totalCharacters)})`}
        />
        <StatRow
          label="Dead"
          value={`${stats.statusCount.Dead} (${percentage(stats.statusCount.Dead, stats.totalCharacters)})`}
        />
        <StatRow
          label="Unknown"
          value={`${stats.statusCount.unknown} (${percentage(stats.statusCount.unknown, stats.totalCharacters)})`}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Top Species (Page 1)</Text>
        {stats.topSpecies.map(([species, count]) => (
          <StatRow key={species} label={species} value={count.toString()} />
        ))}
      </View>
    </ScrollView>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.statRow}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );
}
