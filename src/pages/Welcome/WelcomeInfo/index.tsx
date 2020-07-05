import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Main,
  WelcomeBackground,
  WelcomeText,
  BottomBackground,
  Button,
  ButtonText,
  InfoContainer,
  TextContainer,
  InfoText,
  GreenDot,
} from './styles';

const WelcomeInfo = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Main>
        <WelcomeBackground>
          <WelcomeText>
            Aqui você
          </WelcomeText>
          <WelcomeText>
            encontrará:
          </WelcomeText>
        </WelcomeBackground>
        <InfoContainer>
          <TextContainer>
            <GreenDot/>
            <InfoText>LIVROS INDICADOS POR SEUS PROFESSORES;</InfoText>
          </TextContainer>
          <TextContainer>
            <GreenDot/>
            <InfoText>ACOMPANHAMENTO DE LEITURA;</InfoText>
          </TextContainer>
          <TextContainer>
            <GreenDot/>
            <InfoText>DESAIOS;</InfoText>
          </TextContainer>
          <TextContainer>
            <GreenDot/>
            <InfoText>E MUITO MAIS.</InfoText>
          </TextContainer>
        </InfoContainer>
        <BottomBackground>
        </BottomBackground>
        <Button onPress={() => navigation.navigate('Dashboard')}><ButtonText>Finalizar</ButtonText></Button>
      </Main>
    </Container>
  )
}

export default WelcomeInfo;