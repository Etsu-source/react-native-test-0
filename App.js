import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, Button } from 'react-native';
import styled from 'styled-components/native'

//import Button from './components/Button';

const myimg = require('./assets/2.jpeg');

const StyledText = styled.Text`
  font-size: 40px;
  color: #fff;
  text-shadow: 2px 2px 2px #000;
  font-weight: 800;
`

export default function App({ label }) {
  return (
    <View style={styles.container}>
      <StyledText>My first waifuuu, version 2</StyledText>
      <Image source={myimg} style={styles.image} />
      <StatusBar style="auto" />

      {/* <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable> */}

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF3333',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },

  image: {
    width: 320,
    height: 440,
    borderRadius: 20,
  },

  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },

});
