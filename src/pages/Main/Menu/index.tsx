import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Logo,
  GreenView,
  Title,
  DivLinkOptions,
  DivLinkOptionsOut,
  Options
} from './styles';

const Menu = () => {
  const navigation = useNavigation();

  return (
    <Container>
      
      <GreenView>
        <Title>MENU</Title>

        <DivLinkOptions onPress={() => navigation.navigate('Dashboard')}>
          <Options>
            Página Inicial
          </Options>
        </DivLinkOptions>

        <DivLinkOptions>
          <Options>
            Perfil
          </Options>
        </DivLinkOptions>

        <DivLinkOptions>
          <Options>
            Lendo
          </Options>
        </DivLinkOptions>

        <DivLinkOptions>
          <Options>
            Preciso Ler
          </Options>
        </DivLinkOptions>

        <DivLinkOptions>
          <Options>
            Lidos
          </Options>
        </DivLinkOptions>

        <DivLinkOptions>
          <Options>
            Favoritos
          </Options>
        </DivLinkOptions>

        <DivLinkOptionsOut  onPress={() => navigation.navigate('Home')}>
          <Options>
            Sair
          </Options>
        </DivLinkOptionsOut>

      </GreenView>
      <Logo />
    </Container>
  )
}

export default Menu;