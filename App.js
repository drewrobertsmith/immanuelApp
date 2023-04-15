import React from 'react';
import { SafeArea } from './src/components/safe-area.component';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SermonsScreen } from './src/features/sermons/screens/sermons.screen';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();


const EventsScreen = () => (
  <Text>Events!</Text>
);
const LectionaryScreen = () => (
  <Text>Lectionary!</Text>
);




export default function App() {

  return (

    <SafeArea>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerTitleAlign: 'left',
            //headerStyle: { backgroundColor: '#659D41' }
          }}
        >
          <Tab.Screen name="Sermons" component={SermonsScreen} />
          <Tab.Screen name="Events" component={EventsScreen} />
          <Tab.Screen name="Lectionary" component={LectionaryScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeArea >
  );
}


