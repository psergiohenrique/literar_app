import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/LoginAndRegister/Home';
import LoginStudent from './pages/LoginAndRegister/LoginStudent';
import LoginTeacher from './pages/LoginAndRegister/LoginTeacher';
import Register from './pages/LoginAndRegister/Register';
import ForgotPassword from './pages/LoginAndRegister/ForgotPassword';
import ForgotPasswordSuccess from './pages/LoginAndRegister/ForgotPasswordSuccess';

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
        <AppStack.Screen name='LoginStudent' component={LoginStudent} />
        <AppStack.Screen name='LoginTeacher' component={LoginTeacher} />
        <AppStack.Screen name='Register' component={Register} />
        <AppStack.Screen name='ForgotPassword' component={ForgotPassword} />
        <AppStack.Screen name='ForgotPasswordSuccess' component={ForgotPasswordSuccess} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;