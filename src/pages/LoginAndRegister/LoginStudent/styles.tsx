import styled from 'styled-components/native';


export const ArrowBack = styled.TouchableOpacity`
  margin-top: 16%;
  margin-left: 8%;
`;

export const Main = styled.ImageBackground.attrs({
  source: require("../../../assets/img/backgroundOne.png"),
})`
  flex: 1;
`;

export const Logo = styled.Image.attrs({
  source: require('../../../assets/img/literarpng.png'),
  resizeMode: 'stretch',
})`
  height: 150px;
  width: 150px;
  justify-content: center;
  align-items: center;
  margin-left: 32%;
`;

export const Title = styled.Text`
  color: #578E44;
  font-size: 16px;
  max-width: 280px;
  margin-top: 8%;
  justify-content: center;
  align-items: center;
  margin-left: 32%;
`;

export const Label = styled.Text`
  color: #000;
  margin-left: 5%;
  font-size: 16px;
  max-width: 280px;
  margin-top: 8%;
  margin-left: 16%;
`;

export const Label2 = styled.Text`
  color: #000;
  margin-left: 5%;
  font-size: 16px;
  max-width: 280px;
  margin-top: 4%;
  margin-left: 16%;
`;

export const Input = styled.TextInput`
  height: 60px;
  background-color: #ddd;
  border-radius: 10px;
  font-size: 16px;
  margin-top: 2%;
  margin-left: 14%;
  width: 70%;
  justify-content: center;
  
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
  margin-top: 4%;
  width: 70%;
  margin-left: 14%;
`;


export const ButtonWhite = styled.TouchableOpacity`
  background-color: #fff;
  height: 20px;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  margin-top: 32px;
  border-width: 2px;
  border-color: #578e44;
  width: 70%;
`;

export const ButtonWhiteLinkLeft = styled.TouchableOpacity`
  background-color: transparent;
  height: 30px;
  margin-top: 16px;
`;

export const ButtonWhiteLinkText = styled.Text`
  color: #578e44;
  font-size: 14px;
  text-decoration-line: underline;
  text-align: center;
`;
