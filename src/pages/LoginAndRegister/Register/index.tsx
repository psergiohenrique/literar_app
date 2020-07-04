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

const Register = () => {
  const navigation = useNavigation();
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [email, setEmail] = useState('');

  return (
    <Container>
      <ArrowBack onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' color='#578E44' size={20} />
        </ArrowBack>
      <Main>
        <Logo />

        <Title>REALIZAR MEU CADASTRO</Title>

        <Label>Você é Professor ou Aluno?</Label>
        <CheckBoxContainer>
          <CheckBox
            isChecked={acceptTerms}
            onClick={() => setAcceptTerms(!acceptTerms)}
          />
          <CheckBoxTitle>
            SOU PROFESSOR
          </CheckBoxTitle>
        </CheckBoxContainer>
        <CheckBoxContainer>
          <CheckBox
            isChecked={acceptTerms}
            onClick={() => setAcceptTerms(!acceptTerms)}
          />
          <CheckBoxTitle>
            SOU ALUNO
          </CheckBoxTitle>
        </CheckBoxContainer>

        <LabelInput>Seu nome completo:</LabelInput>
        <Input
          placeholder="Coloca aqui o seu nome!"
          autoCorrect={false}
          value={name}
          onChangeText={setName}
        />

        <LabelInput>Nome da Escola:</LabelInput>
        <Input
          placeholder="Coloca aqui o nome da sua escola!"
          autoCorrect={false}
          value={school}
          onChangeText={setSchool}
        />

        <LabelInput>Seu e-mail:</LabelInput>
        <Input
          placeholder="Coloca aqui o seu e-mail!"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />


        <Button onPress={() => navigation.navigate('Home')}>
          <ButtonText>
            CADASTRAR
          </ButtonText>
        </Button>

      
      </Main>

    </Container>
  )
}

export default Register;