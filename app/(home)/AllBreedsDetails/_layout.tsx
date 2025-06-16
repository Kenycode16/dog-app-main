import { Stack } from 'expo-router';

// Type definitions
interface Breed {
  id: number;
  name: string;
  // Add other breed properties here
}

interface RouteParams {
  breedId?: string;
}

export default function BreedDetailsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: 'Breed Information',
        headerStyle: {
          backgroundColor: '#faf8f4',
        },
        headerTintColor: '#8b8155',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
      }}
    >
      {/* <Stack.Screen 
        name="BreedDetails"
        options={({ route }) => {
          const params = route.params as RouteParams;
          const breedId = params?.breedId;
          const breed = breeds.find(b => String(b.id) === String(breedId));
          return {
            headerTitle: breed ? `${breed.name} Details` : 'Dog Breed Details',
          };
        }}
      /> */}
      <Stack.Screen 
        name="BreedMoreInfo"
        options={{
          headerTitle: 'Additional Information',
        }}
      />
    </Stack>
  );
} 