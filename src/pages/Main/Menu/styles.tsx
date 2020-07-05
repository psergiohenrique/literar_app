import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
})``;

export const Logo = styled.Image.attrs({
  source: require('../../../assets/img/literarpng.png'),
  resizeMode: 'stretch',
})`
  margin-top: auto;
  margin-bottom: 24%;
  height: 150px;
  width: 150px;
`;

export const GreenView = styled.View`
  flex-direction: column;
  width: 100%;
  height: 60%;
  background-color: #578E44;
  border-radius: 30px;
  align-items: center;
`;


export const Title = styled.Text`
  margin-top: 18%;
  margin-bottom: 8%;
  color: #fff;
  font-size: 24px;
  text-decoration-line: underline;
`;

export const DivLinkOptions = styled.TouchableOpacity`
  background-color: transparent;
`;

export const Options = styled.Text`
  margin-top: 4%;
  color: #fff;
  font-size: 18px;
`;

export const DivLinkOptionsOut = styled.TouchableOpacity`
  background-color: transparent;
  margin-top: 24%;
`;


