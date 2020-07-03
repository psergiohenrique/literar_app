import React from 'react';
import { Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image style={styles.logo} source={require('../../assets/img/literarpng.png')} />

        <Text style={styles.title}>FAZER MEU LOGIN</Text>

        <RectButton style={styles.button} onPress={() => navigation.navigate('LoginTeacher')}>
          <Text style={styles.buttonText}>
            SOU PROFESSOR(A)
          </Text>
        </RectButton>

        <RectButton style={styles.buttonWhite} onPress={() => navigation.navigate('LoginStudent')}>
          <Text style={styles.buttonTextGreen}>
            SOU ALUNO(A)
          </Text>
        </RectButton>

        <View style={{ flexDirection: 'row' }}>
          <RectButton style={styles.buttonWhiteLinkLeft}>
            <Text style={styles.buttonWhiteLinkText}>
              CADASTRAR
            </Text>
          </RectButton>

          <RectButton style={styles.buttonWhiteLinkRight}>
            <Text style={styles.buttonWhiteLinkText}>
              ESQUECI MINHA SENHA
            </Text>
          </RectButton>
        </View>
        
      </View>

      <View style={styles.footer}>
        <Text style={styles.textoArvoreLogo}>UM PROJETO</Text>

        <Image style={styles.arvoreLogo} source={require('../../assets/img/baixados.png')} />
      </View>
      
    </View>
  )
}

export default Home;