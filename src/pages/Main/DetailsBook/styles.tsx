import styled from 'styled-components/native';


export const ArrowBack = styled.TouchableOpacity`
  margin-top: 16%;
  margin-left: 8%;
`;

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
})``;

export const GreenView = styled.View`
  width: 100%;
  height: 52%;
  background-color: #578E44;
  border-radius: 42px;
`;


export const DivLinkBook = styled.TouchableOpacity`
  background-color: transparent;
`;

export const Book = styled.Image.attrs({
  source: require('../../../assets/img/livro.png'),
  resizeMode: 'stretch',
})`
  height: 225px;
  width: 160px;
`;

export const DivBook = styled.TouchableOpacity`
  background-color: transparent;
  align-items: center;
  justify-content: center;
  margin-bottom: 8%;
  flex-direction: row;
`;

export const Title = styled.Text`
  margin-top: 20%;
  margin-bottom: 2%;
  color: #222;
  font-size: 24px;
  text-decoration-line: underline;
  font-weight: 300;
`;

export const Sinopse = styled.Text`
  margin-top: 6%;
  margin-bottom: 12%;
  margin-right: 12%;
  margin-left: 12%;
  color: #222;
  font-size: 16px;
  font-weight: 300;
`;

export const Button = styled.TouchableOpacity`
  background-color: #578e44;
  height: 50px;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  margin-top: 2%;
  width: 70%;
`;

export const ButtonWhite = styled.TouchableOpacity`
  background-color: #fff;
  height: 50px;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  margin-top: 4%;
  border-width: 2px;
  border-color: #578e44;
  width: 70%;
`;

export const ButtonText = styled.Text`
  flex: 1;
  text-align: center;
  color: #fff;
  font-size: 16px;
`;

export const ButtonTextGreen = styled.Text`
  flex: 1;
  text-align: center;
  color: #578e44;
  font-size: 16px;
`;

