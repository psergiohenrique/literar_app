import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Main = styled.ScrollView.attrs({
  contentContainerStyle: {
    width: '100%',
    paddingBottom: getBottomSpace(),
    alignItems: 'center',
  },
})``;

export const Logo = styled.Image.attrs({
  source: require('../../assets/img/literarpng.png'),
  resizeMode: 'stretch',
})`
  margin-top: 15%;
  height: 150px;
  width: 150px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #578E44;
  font-size: 24px;
  max-width: 280px;
  margin-top: 15%;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  flex: 1;
  text-align: center;
  color: #fff;
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #578e44;
  height: 60px;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  margin-top: 10%;
  width: 70%;
`;

export const ButtonWhite = styled.TouchableOpacity`
  background-color: #fff;
  height: 60px;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  margin-top: 32px;
  border-width: 2px;
  border-color: #578e44;
  width: 70%;
`;

export const ButtonTextGreen = styled.Text`
  flex: 1;
  text-align: center;
  color: #578e44;
  font-size: 16px;
`;

export const ViewLink = styled.View`
  flex-direction: row;
  margin-top: 8%;
`;

export const ButtonWhiteLinkLeft = styled.TouchableOpacity`
  background-color: #fff;
  height: 30px;
`;

export const ButtonWhiteLinkRight = styled.TouchableOpacity`
  background-color: #fff;
  height: 30px;
`;

export const ButtonWhiteLinkText = styled.Text`
  color: #578e44;
  font-size: 14px;
  text-decoration-line: underline;
  text-align: center;
`;

export const ButtonWhiteLinkTextLeft = styled.Text`
  color: #578e44;
  font-size: 14px;
  text-decoration-line: underline;
  text-align: center;
  margin-right: 12%;
`;

export const TextoArvoreLogo = styled.Text`
  color: #000;
  font-size: 12px;
  text-align: center;
  justify-content: center;
  margin-top: 50%;
`;

export const ArvoreLogo = styled.Image.attrs({
  source: require('../../assets/img/baixados.png'),
  resizeMode: 'stretch',
})`
  justify-content: center;
  height: 45px;
  width: 190px;
  bottom: 0;
`;