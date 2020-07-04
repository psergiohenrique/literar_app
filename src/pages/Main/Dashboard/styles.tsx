import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
    width: '100%',
  },
})``;


export const DivUser = styled.TouchableOpacity`
  margin-top: 20%;
  margin-right: auto;
  margin-left: 10%;
  flex-direction: row;
`;

export const DivMenu = styled.TouchableOpacity`
  margin-left: 36%;
  margin-top: 2%;
`;


export const User = styled.Image.attrs({
  source: require('../../../assets/img/user.png'),
  resizeMode: 'stretch',
})`
  height: 42px;
  width: 42px;
`;

export const Main = styled.ScrollView.attrs({
  contentContainerStyle: {
    width: '100%',
    paddingBottom: getBottomSpace(),
    alignItems: 'center',
  },
})``;


export const Title = styled.Text`
  color: #578E44;
  font-size: 18px;
  margin-left: 2%;
`;

export const Message = styled.Text`
  color: #222222;
  font-size: 12px;
`;

export const DivCard = styled.View`
  flex-direction: row;
  margin-top: 16%;
  margin-left: 7%;
`;

export const DivCardBottom = styled.View`
  flex-direction: row;
  margin-top: 4%;
  margin-left: 7%;
`;

export const Card = styled.TouchableOpacity`
  background-color: #eeeeee;
  height: 100px;
  width: 22%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-right: 2%;
  box-shadow: 0px 5px 0px #cccccc;
`;

export const CardText = styled.Text`
  color: #222222;
  margin-top: 12%;
  font-size: 12px;
`;

export const Img1 = styled.Image.attrs({
  source: require('../../../assets/img/book.png'),
  resizeMode: 'stretch',
})`
  height: 42px;
  width: 42px;
`;

export const Img2 = styled.Image.attrs({
  source: require('../../../assets/img/school.png'),
  resizeMode: 'stretch',
})`
  height: 42px;
  width: 42px;
`;

export const Img3 = styled.Image.attrs({
  source: require('../../../assets/img/bookmark.png'),
  resizeMode: 'stretch',
})`
  height: 42px;
  width: 42px;
`;

export const Img4 = styled.Image.attrs({
  source: require('../../../assets/img/novel.png'),
  resizeMode: 'stretch',
})`
  height: 42px;
  width: 42px;
`;

export const Img5 = styled.Image.attrs({
  source: require('../../../assets/img/prize.png'),
  resizeMode: 'stretch',
})`
  height: 42px;
  width: 42px;
`;

export const Img6 = styled.Image.attrs({
  source: require('../../../assets/img/user.png'),
  resizeMode: 'stretch',
})`
  height: 42px;
  width: 42px;
`;

export const TitleDescription = styled.Text`
  margin-top: 16%;
  color: #222222;
  font-size: 20px;
  text-align: center;
`;

export const TitleDescriptionUnderline = styled.Text`
  color: #222222;
  font-size: 20px;
  text-align: center;
  text-decoration-line: underline;
  text-decoration-color: #578E44;
  text-decoration-style: solid;
`;


export const DivBook = styled.TouchableOpacity`
  background-color: transparent;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: 8%;
  flex-direction: row;
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

export const ArrowRightImg = styled.Image.attrs({
  source: require('../../../assets/img/arrow_right_white.png'),
  resizeMode: 'stretch',
})`
  margin-left: 8%;
  height: 38px;
  width: 38px;

`;

export const ArrowLeftImg = styled.Image.attrs({
  source: require('../../../assets/img/arrow_right_white.png'),
  resizeMode: 'stretch',
})`
  margin-right: 8%;
  height: 38px;
  width: 38px;
  transform: rotate(180deg);
`;