import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  main: {
    flex: 1,
  },

  logo: {  
    marginTop: 42,
    marginLeft: 110,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150, 
    height: 150,
  },

  title: {
    color: '#578E44',
    fontSize: 24,
    maxWidth: 280,
    marginTop: 18,
    marginLeft: 90,
  },

  footer: {},

  button: {
    backgroundColor: '#578E44',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 32,
  },

  buttonWhite: {
    backgroundColor: '#fff',
    height: 60,
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 32,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#578E44'
  },

  buttonWhiteLinkLeft: {
    backgroundColor: '#fff',
    height: 30,
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 16,
    marginLeft: 16
  },

  buttonWhiteLinkRight: {
    backgroundColor: '#fff',
    height: 30,
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 16,
    marginRight: 16,
    marginLeft: 110
  },

  buttonWhiteLinkText: {
    color: '#578E44',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 14,
    textDecorationLine: 'underline'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
  },

  buttonTextGreen: {
    color: '#578E44',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16,
  },

  textoArvoreLogo: {
    color: 'black', 
    fontSize: 12,
    marginLeft: 90,
  },

  arvoreLogo: {  
    marginLeft: 90,
    justifyContent: 'center',
    width: 190, 
    height: 45,
  },
});

export default styles;