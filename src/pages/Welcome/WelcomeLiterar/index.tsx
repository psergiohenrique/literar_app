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
  ImageBaloon,
  BaloonText,
} from './styles';

const WelcomeLiterar = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Main>
        <WelcomeBackground>
          <WelcomeText>
            BEM VINDO(A) AO
          </WelcomeText>
          <WelcomeText>
            APLICATIVO DA
          </WelcomeText>
          <WelcomeText>
            LITERAR
          </WelcomeText>
        </WelcomeBackground>
        <Button onPress={() => navigation.navigate('WelcomeInfo')}><ButtonText>Continuar</ButtonText></Button>
        <BottomBackground>
        <ImageBaloon>
          <BaloonText>ESTAMOS MUITO FELIZES DE TER VOCÊ AQUI</BaloonText>
        </ImageBaloon>
        </BottomBackground>
      </Main>
    </Container>
  )
}

export default WelcomeLiterar;