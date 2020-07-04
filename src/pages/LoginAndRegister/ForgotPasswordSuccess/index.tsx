import React from 'react';
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import {
  ArrowBack,
  Container,
  Main,
  Logo,
  Title,
  ButtonText,
  Button,
  Label,
} from './styles';

const ForgotPasswordSuccess = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ArrowBack onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' color='#578E44' size={20} />
        </ArrowBack>
      <Main>
        <Logo />

        <Title>ESQUECEU SUA SENHA?</Title>

        <Label>
          Sua senha foi redefinida com sucesso. 
          Acesso seu e-mail para ter acesso a sua nova senha
        </Label>

        <Button onPress={() => navigation.navigate('Home')}>
          <ButtonText>
            FAZER LOGIN
          </ButtonText>
        </Button>

      </Main>

    </Container>
  )
}

export default ForgotPasswordSuccess;