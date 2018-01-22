import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import GoogleAutocomplete from '../components/placesAutocomplete'
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Neighbors',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.myText}>HI!</Text>

        <GoogleAutocomplete style={styles.googleAuto}/>


        <Button
          raised
          // icon={{ name: 'home', size: 32 }}
          buttonStyle={{ backgroundColor: 'red', borderRadius: 10, marginTop: 100 }}
          textStyle={{ textAlign: 'center' }}
          title={`SignUp`}
        />      
        
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  googleAuto: {
    marginTop: 100, 
  },
  myText: {
    paddingTop: 50,
    fontSize: 32,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',  
  }
});

