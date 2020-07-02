import React, { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from "@expo/vector-icons";

import styles from './styles';

const LoginStudent = () => {
  const navigation = useNavigation();
  const [city, setCity] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.arrowBack} onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' color='#578E44' size={20} />
        </TouchableOpacity>

        <View style={styles.main}>
          <Image style={styles.logo} source={require('../../assets/img/user.png')} />

          <Text style={styles.title}>SOU ALUNO (A)</Text>

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

          <View style={styles.footer}>
            <Image style={{ width: 400, }}source={require('../../assets/img/tree.png')} />
          </View>
          
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
export default LoginStudent;