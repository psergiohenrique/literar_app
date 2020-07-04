import React from 'react';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Feather as Icon } from "@expo/vector-icons";

import {
  DivUser,
  DivMenu,
  Container,
  User,
  Title,
  Message,
  DivCard,
  Card,
  DivCardBottom,
  CardText,
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  TitleDescription,
  TitleDescriptionUnderline,
  DivBook,
  DivLinkBook,
  Book,
  ArrowRightImg,
  ArrowLeftImg
} from './styles';

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <DivUser>
        <User />
        <Title>
          {'Victor,\n'}
          <Message>Bem-vindo de volta</Message>  
        </Title>
        <DivMenu onPress={() => navigation.navigate('Menu')}>
          <Icon name='menu' color='#222222' size={28} />
        </DivMenu>
      </DivUser>
      <ImageBackground
        source={require("../../../assets/img/backgroundTwo.png")}
        style={
          { 
            flex: 1, 
            paddingBottom: getBottomSpace(),
          }
        }
      >

        <DivCard>
          <Card >
            <Img1 />
            <CardText>
              LENDO
            </CardText>
          </Card>
          <Card >
            <Img2 />
            <CardText>
              PRECISO LER
            </CardText>
          </Card>
          <Card >
            <Img3 />
            <CardText>
              LIDOS
            </CardText>
          </Card>
          <Card >
            <Img4 />
            <CardText>
              FAVORITOS
            </CardText>
          </Card>
        </DivCard>

        <DivCardBottom>
          <Card >
            <Img5 />
            <CardText>
              DESAFIOS
            </CardText>
          </Card>
          <Card >
            <Img6 />
            <CardText>
              PERFIL
            </CardText>
          </Card>
        </DivCardBottom>

        <TitleDescription>
          MEUS LIVROS
        </TitleDescription>
        <TitleDescriptionUnderline>
          RECENTES
        </TitleDescriptionUnderline>

        <DivBook>
          <ArrowLeftImg />
          <DivLinkBook onPress={() => navigation.navigate('DetailsBook')}>
            <Book />
          </DivLinkBook>
          <ArrowRightImg />
        </DivBook>
        
        
      </ImageBackground>

    </Container>
  )
}

export default Dashboard;