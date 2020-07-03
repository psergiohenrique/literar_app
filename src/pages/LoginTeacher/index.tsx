import React, { useState } from "react";
import { Image, ImageBackground, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from "@expo/vector-icons";

import styles from './styles';

const LoginTeacher = () => {
  const navigation = useNavigation();
  const [city, setCity] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ImageBackground
        source={require("../../assets/img/backgroundOne.png")}
        style={styles.container}
      >
        <TouchableOpacity style={styles.arrowBack} onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' color='#578E44' size={20} />
        </TouchableOpacity>

        <View style={styles.main}>
          <Image style={styles.logo} source={require('../../assets/img/literarpng.png')} />

          <Text style={styles.title}>SOU PROFESSOR (A)</Text>

          <View>
            <Text style={styles.label}>
              E-MAIL
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu e-mail"
              autoCorrect={false}
              value={city}
              onChangeText={setCity}
            />

            <Text style={styles.labelDown}>
              SENHA
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha secreta"
              autoCorrect={false}
              value={city}
              onChangeText={setCity}
            />
          </View>

          <RectButton style={styles.button} onPress={() => navigation.navigate('LoginTeacher')}>
            <Text style={styles.buttonText}>
              ENTRAR
            </Text>
          </RectButton>

          <RectButton style={styles.buttonWhiteLink}>
            <Text style={styles.buttonWhiteLinkText}>
              ESQUECI MINHA SENHA
            </Text>
          </RectButton>
          
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

export default LoginTeacher;