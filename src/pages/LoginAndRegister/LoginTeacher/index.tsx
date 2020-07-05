import React, { useState } from "react";
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Feather as Icon } from "@expo/vector-icons";

import {
  ArrowBack,
  Main,
  Logo,
  Title,
  Label,
  Label2,
  Input,
  ButtonText,
  ButtonWhiteLinkText,
  Button,
  ButtonWhiteLinkLeft,
} from './styles';

const LoginTeacher = () => {
  const navigation = useNavigation();
  const [city, setCity] = useState("");

  return (
    <Main>
      <ArrowBack onPress={() => navigation.goBack()}>
        <Icon name='arrow-left' color='#578E44' size={20} />
      </ArrowBack>
      <ImageBackground
        source={require("../../../assets/img/backgroundOne.png")}
        style={
          { 
            flex: 1, 
            paddingBottom: getBottomSpace(),
          }
        }
      >
        <Logo />

        <Title>
          SOU PROFESSOR(A)
        </Title>

        <Label>
          E-MAIL
        </Label>
        <Input
          placeholder="Digite seu e-mail"
          autoCorrect={false}
          value={city}
          onChangeText={setCity}
        />

        <Label2>
          SENHA
        </Label2>
        <Input
          placeholder="Digite sua senha secreta"
          autoCorrect={false}
          value={city}
          onChangeText={setCity}
        />

<<<<<<< HEAD
        <Button onPress={() => navigation.navigate('WelcomeLiterar')}>
=======
        <Button onPress={() => navigation.navigate('Dashboard')}>
>>>>>>> e882f5f76512765987ca1dd4d0129aa957a02c14
          <ButtonText>
            ENTRAR
          </ButtonText>
        </Button>

        <ButtonWhiteLinkLeft  onPress={() => navigation.navigate('ForgotPassword')}>
          <ButtonWhiteLinkText>
            ESQUECI MINHA SENHA
          </ButtonWhiteLinkText>
        </ButtonWhiteLinkLeft>

          
        </ImageBackground>
      </Main>
  );
}

export default LoginTeacher;