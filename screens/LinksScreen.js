import React from 'react';
import { View, ScrollView, StyleSheet, TextInput } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import DoneBar from 'done-bar';

export default class LinksScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {text: 'hi there'}
  }
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    const inputStyle = {marginLeft:5, marginRight:5, padding:10, borderColor: 'gray', borderWidth: 1}
    return (
      <ScrollView style={styles.container}>
       <View>
        <TextInput
           onChangeText={(text) => this.setState({text})}
           value={this.state.text}
           style={inputStyle}
           multiline={true}
           editable={true}
         />
         <DoneBar
          keyboardType={this.state.keyboardType}
          onDone={() => console.log('done! :' + this.state.text)}
         />
        </View>
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
});
