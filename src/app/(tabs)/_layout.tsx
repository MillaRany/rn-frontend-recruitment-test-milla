import { Ionicons } from "@expo/vector-icons";
import { theme } from "@/theme/colors";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: theme.surface.bg },
        headerTintColor: theme.text.primary,
        tabBarStyle: { backgroundColor: theme.surface.elevated },
        tabBarActiveTintColor: theme.primary.main,
        tabBarInactiveTintColor: theme.text.subdued,
      }}
    >
      <Tabs.Screen
        name="characters/index"
        options={{
          title: "Characters",
          tabBarLabel: "Characters",
          tabBarIcon: ({ color, size }) => <Ionicons name="people-outline" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favorites",
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => <Ionicons name="heart-outline" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="stats/index"
        options={{
          title: "Stats",
          tabBarLabel: "Stats",
          tabBarIcon: ({ color, size }) => <Ionicons name="stats-chart-outline" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
