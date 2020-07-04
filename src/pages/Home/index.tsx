import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Main,
  Logo,
  Title,
  ButtonText,
  ButtonTextGreen,
  ArvoreLogo,
  TextoArvoreLogo,
  ButtonWhiteLinkText,
  ButtonWhiteLinkTextLeft,
  Button,
  ButtonWhite,
  ButtonWhiteLinkLeft,
  ButtonWhiteLinkRight,
  ViewLink
} from './styles';

const Home = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Main>
        <Logo />

        <Title>FAZER MEU LOGIN</Title>

        <Button onPress={() => navigation.navigate('LoginTeacher')}>
          <ButtonText>
            SOU PROFESSOR(A)
          </ButtonText>
        </Button>

        <ButtonWhite onPress={() => navigation.navigate('LoginStudent')}>
          <ButtonTextGreen>
            SOU ALUNO(A)
          </ButtonTextGreen>
        </ButtonWhite>

        <ViewLink>
          <ButtonWhiteLinkLeft onPress={() => navigation.navigate('Register')}>
            <ButtonWhiteLinkTextLeft>
              CADASTRAR
            </ButtonWhiteLinkTextLeft>
          </ButtonWhiteLinkLeft>

          <ButtonWhiteLinkRight onPress={() => navigation.navigate('ForgotPassword')}>
            <ButtonWhiteLinkText>
              ESQUECI MINHA SENHA
            </ButtonWhiteLinkText>
          </ButtonWhiteLinkRight>
        </ViewLink>


        <TextoArvoreLogo>
          UM PROJETO
        </TextoArvoreLogo>
        <ArvoreLogo />
        
      </Main>

    </Container>
  )
}

export default Home;