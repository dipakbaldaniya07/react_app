import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './src/componants/drawer';
import {Provider as PaperProvider} from 'react-native-paper';
import BottomTabNavigator from './src/componants/bottomtab';
const Stack = createNativeStackNavigator();
import {ThemeContext} from './src/componants/changetheme';

const App = () => {
  const [theme, SetTheme] = useState({mode: 'light'});

  const UpdateTheme = NewTheme => {
    let mode;
    if (!NewTheme) {
      mode = theme.mode === 'dark' ? 'light' : 'dark';
      NewTheme = {mode};
    }
    SetTheme(NewTheme);
  };

  return (
    <ThemeContext.Provider value={{theme, UpdateTheme}}>
      <PaperProvider>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </PaperProvider>
    </ThemeContext.Provider>
  );
};

export default App;
