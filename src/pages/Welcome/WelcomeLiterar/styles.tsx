import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Main = styled.ScrollView.attrs({
  contentContainerStyle: {
    width: '100%',
    height: '100%',
    paddingBottom: getBottomSpace(),
    alignItems: 'center',
  },
})``;

export const WelcomeBackground = styled.ImageBackground.attrs({
  source: require('../../../assets/img/9.png'),
  resizeMode: 'stretch',
})`
  width: 100%;
  height: 50%;
  justify-content: center;
  align-items: center;
`;

export const WelcomeText = styled.Text`
  text-align: center;
  color: #fff;
  bottom: 10%;
  font-size: 25px;
`;

export const BottomBackground = styled.ImageBackground.attrs({
  source: require('../../../assets/img/undraw_book_lover_mkck.png'),
  resizeMode: 'stretch',
})`
  height: 318px;
  width: 416px;
  top: 40px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #578e44;
  height: 80px;
  width: 80px;
  flex-direction: row;
  border-radius: 80px;
  border-color: #ddd;
  border-width: 1px;
  overflow: hidden;
  align-items: center;
  position: absolute;
  z-index: 999;
  top: 45%;
  left: 13%;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
text-align: center;
color: #fff;
font-size: 14px;
`;

export const ImageBaloon = styled.ImageBackground.attrs({
  source: require('../../../assets/img/comment.png'),
  resizeMode: 'stretch',
})`

  height: 125px;
  width: 125px;
  left: 220px
  bottom: 85px;
  padding: 20px;
`;

export const BaloonText = styled.Text`
text-align: center;
color: #000;
font-size: 13px;
`;