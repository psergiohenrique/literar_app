import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import LoginStudent from './pages/LoginStudent';
import LoginTeacher from './pages/LoginTeacher';
import Register from './pages/Register';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator 
        headerMode='none' 
        screenOptions={{
          cardStyle: {
            backgroundColor: '#fff',
          }
        }}>
        <AppStack.Screen name='Home' component={Home} />
        <AppStack.Screen name='LoginStudent' component={LoginStudent}/>
        <AppStack.Screen name='LoginTeacher' component={LoginTeacher}/>
        <AppStack.Screen name='Register' component={Register}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;