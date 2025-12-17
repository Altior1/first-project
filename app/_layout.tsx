import { useColorScheme } from '@/hooks/use-color-scheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
export const unstable_settings = {
  anchor: '(tabs)',
};


export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="WhereAmI" options={{ title: 'Où suis-je ?' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
