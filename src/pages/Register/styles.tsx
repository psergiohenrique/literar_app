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
    marginLeft: 120,
    width: 120, 
    height: 120,
  },

  title: {
    color: '#578E44',
    fontSize: 16,
    maxWidth: 280,
    marginLeft: 120,
    marginTop: 8
  },

  form: {},

  footer: {
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: 0,
    height: 250,
    alignItems:'center',
  },

  arrowBack: {
    marginTop: 32
  },

  button: {
    backgroundColor: '#578E44',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 32,
  },

  buttonWhiteLink: {
    backgroundColor: '#fff',
    height: 30,
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 16,
    marginRight: 16,
    marginLeft: 120
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

  label: {
    color: 'black', 
    fontSize: 16,
    marginLeft: 5,
    marginTop: 32,
    fontWeight: 'bold'
  },

  labelDown: {
    color: 'black', 
    fontSize: 16,
    marginLeft: 5,
    marginTop: 16,
    fontWeight: 'bold'
  },

  input: {
    height: 60,
    backgroundColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    marginTop: 8
  },
});

export default styles;