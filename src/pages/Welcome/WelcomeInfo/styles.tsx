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
  height: 45%;
  justify-content: center;
`;

export const WelcomeText = styled.Text`
  text-align: left;
  color: #fff;
  bottom: 5%;
  font-size: 25px;
  left: 20px;
`;

export const BottomBackground = styled.Image.attrs({
  source: require('../../../assets/img/splash.png'),
  resizeMode: 'stretch',
})`
  height: 221px;
  width: 333px;
  position: absolute;
  bottom: 85px;
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
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 5px;
`;

export const ButtonText = styled.Text`
text-align: center;
color: #fff;
font-size: 14px;
`;

export const InfoContainer = styled.View`
  position: absolute;
  z-index: 999;
  top: 38%;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InfoText = styled.Text`
  text-align: left;
  color: #000;
  font-size: 14px;
  width: 160px;
  margin: 2px;
  font-weight: bold;
`;

export const GreenDot = styled.View`
  border-radius: 100px;
  width: 10px;
  height: 10px;
  background-color: #578e44;
  margin: 5px;
`;