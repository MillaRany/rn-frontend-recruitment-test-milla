import { Text, View, ScrollView } from "react-native";
import { useStatsController } from "./useStatsController";
import { styles } from "./styles";
import LoadingState from "@/components/LoadingState";
import ErrorState from "@/components/ErrorState";
import { percentage } from "@/utils/percentage";

export default function StatsScreen() {
  const { stats, loading, error, refetch, hasFavorites } = useStatsController();

  if (loading) return <LoadingState />;
  if (error) return <ErrorState onRetry={() => refetch()} />;
  if (!hasFavorites) {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Statistics</Text>
        <View style={styles.emptyCard}>
          <Text style={styles.emptyText}>No favorites yet</Text>
          <Text style={styles.emptyHint}>Add characters to your favorites to see stats here.</Text>
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Favorites Statistics</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Overview</Text>
        <StatRow label="Total Favorites" value={stats!.totalFavorites.toLocaleString()} />
        <StatRow
          label="% of All Characters"
          value={percentage(stats!.totalFavorites, stats!.totalAll)}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Status Distribution</Text>
        <StatRow
          label="Alive"
          value={`${stats!.statusCount.Alive} (${percentage(stats!.statusCount.Alive, stats!.totalFavorites)})`}
        />
        <StatRow
          label="Dead"
          value={`${stats!.statusCount.Dead} (${percentage(stats!.statusCount.Dead, stats!.totalFavorites)})`}
        />
        <StatRow
          label="Unknown"
          value={`${stats!.statusCount.unknown} (${percentage(stats!.statusCount.unknown, stats!.totalFavorites)})`}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Top Favorited Species</Text>
        {stats!.topSpecies.map(([species, count]) => (
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
