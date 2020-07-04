import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import CB from 'react-native-check-box';

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

export const ArrowBack = styled.TouchableOpacity`
  margin-top: 16%;
  margin-left: 8%;
`;

export const Logo = styled.Image.attrs({
  source: require('../../../assets/img/literarpng.png'),
  resizeMode: 'stretch',
})`
  height: 150px;
  width: 150px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #578E44;
  font-size: 14px;
  max-width: 280px;
  margin-top: 8%;
`;

export const Label = styled.Text`
  color: #000;
  font-size: 14px;
  margin-right: 16%;
  margin-left: 16%;
  margin-bottom: 9%;
  margin-top: 10%;
`;

export const LabelInput = styled.Text`
  color: #000;
  font-size: 14px;
  max-width: 280px;
  margin-top: 4%;
  margin-bottom: 2%;
  margin-right: auto;
  margin-left: 16%;
`;

export const CheckBoxContainer = styled.View`
  flex-direction: row;
  margin-bottom: 1%;
  margin-right: auto;
  margin-left: 16%;
`;

export const CheckBox = styled(CB).attrs({
  checkedCheckBoxColor: '#578E44',
})`
  margin-right: 8px;
`;

export const CheckBoxTitle = styled.Text`
  font-size: 10px;
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
  margin-top: 15%;
  width: 70%;
`;

export const Input = styled.TextInput`
  height: 50px;
  background-color: #ddd;
  border-radius: 10px;
  font-size: 16px;
  width: 70%;
  justify-content: center;
  
`;