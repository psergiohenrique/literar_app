import React, { useState } from 'react';
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
  CheckBoxContainer,
  CheckBox,
  CheckBoxTitle,
  Input,
  LabelInput
} from './styles';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <Container>
      <ArrowBack onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' color='#578E44' size={20} />
        </ArrowBack>
      <Main>
        <Logo />

        <Title>ESQUECEU SUA SENHA?</Title>

        <Label>
          Não tem problema, insira abaixo o seu nome e e-mail 
          de cadastro da conta  te enviaremos um link para redefinição
        </Label>

        <LabelInput>Seu nome completo:</LabelInput>
        <Input
          placeholder="Coloca aqui o seu nome!"
          autoCorrect={false}
          value={name}
          onChangeText={setName}
        />

        <LabelInput>Seu e-mail:</LabelInput>
        <Input
          placeholder="Coloca aqui o seu e-mail!"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />


        <Button onPress={() => navigation.navigate('ForgotPasswordSuccess')}>
          <ButtonText>
            REDEFINIR SENHA
          </ButtonText>
        </Button>

      
      </Main>

    </Container>
  )
}

export default ForgotPassword;