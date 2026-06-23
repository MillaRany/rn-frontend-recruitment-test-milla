import { client } from "@/api/client";
import { theme } from "@/theme/colors";
import { ApolloProvider } from "@apollo/client/react";
import { useApolloClientDevTools } from "@dev-plugins/apollo-client";
import { Stack } from "expo-router";

export default function RootLayout() {
  useApolloClientDevTools(client);

  return(
    <ApolloProvider client={client}>
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: theme.surface.bg } }}>
        <Stack.Screen name="character/[id]" options={{ headerShown: true, headerStyle: { backgroundColor: theme.surface.bg }, headerTintColor: theme.text.primary, title: "Character", headerBackTitle: "Back" }} />
      </Stack>
    </ApolloProvider>
  );
}
