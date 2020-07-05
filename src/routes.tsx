import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/LoginAndRegister/Home';
import LoginStudent from './pages/LoginAndRegister/LoginStudent';
import LoginTeacher from './pages/LoginAndRegister/LoginTeacher';
import Register from './pages/LoginAndRegister/Register';
import ForgotPassword from './pages/LoginAndRegister/ForgotPassword';
import ForgotPasswordSuccess from './pages/LoginAndRegister/ForgotPasswordSuccess';
import WelcomeLieterar from './pages/Welcome/WelcomeLiterar';
import WelcomeInfo from './pages/Welcome/WelcomeInfo';

import Dashboard from './pages/Main/Dashboard';
import Menu from './pages/Main/Menu';
import DetailsBook from './pages/Main/DetailsBook';

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

        {/* ROTAS DE LOGIN, CADASTRO E ESQUECEU A SENHA */}
        <AppStack.Screen name='Home' component={Home} />
        <AppStack.Screen name='LoginStudent' component={LoginStudent} />
        <AppStack.Screen name='LoginTeacher' component={LoginTeacher} />
        <AppStack.Screen name='Register' component={Register} />
        <AppStack.Screen name='ForgotPassword' component={ForgotPassword} />
        <AppStack.Screen name='ForgotPasswordSuccess' component={ForgotPasswordSuccess} />
<<<<<<< HEAD
        <AppStack.Screen name='WelcomeLiterar' component={WelcomeLieterar} />
        <AppStack.Screen name='WelcomeInfo' component={WelcomeInfo} />
=======

        {/* ROTAS DE BOAS VINDAS */}

        {/* ROTAS DE DASH */}
        <AppStack.Screen name='Dashboard' component={Dashboard} />
        <AppStack.Screen name='Menu' component={Menu} />
        <AppStack.Screen name='DetailsBook' component={DetailsBook} />
>>>>>>> e882f5f76512765987ca1dd4d0129aa957a02c14
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;