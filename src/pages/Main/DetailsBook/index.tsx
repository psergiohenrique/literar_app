import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather as Icon } from "@expo/vector-icons";

import {
  ArrowBack,
  Container,
  GreenView,
  DivBook,
  Book,
  DivLinkBook,
  Title,
  Sinopse,
  ButtonText,
  Button,
  ButtonWhite,
  ButtonTextGreen
} from './styles';

const DetailsBook = () => {
  const navigation = useNavigation();

  return (
    <Container>
      
      <GreenView>
        <ArrowBack onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' color='#ffffff' size={28} />
        </ArrowBack>
        <DivBook>
          <DivLinkBook onPress={() => navigation.navigate('DetailsBook')}>
            <Book />
          </DivLinkBook>
        </DivBook>
      </GreenView>

      <Title>
        IN TOUR OWN BACKYARD
      </Title>

      <Sinopse>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur molestie hendrerit. 
        Nunc id est ut justo tincidunt bibendum eget sit amet felis. 
        Donec interdum est sit amet orci interdum, at consectetur lacus imperdiet.
      </Sinopse>

      <Button>
        <ButtonText>
          LER AGORA
        </ButtonText>
      </Button>

      <ButtonWhite>
        <ButtonTextGreen>
          ADICIONAR AOS FAVORITOS
        </ButtonTextGreen>
      </ButtonWhite>

    </Container>
  )
}

export default DetailsBook;