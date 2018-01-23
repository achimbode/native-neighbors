import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

import { searchNeighbors } from '../api/serverApi';
import NeighborsSearch from '../components/NeighborsSearch';
// import GoogleAutocomplete from '../components/placesAutocomplete';

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.renderResults = this.renderResults.bind(this);
  }

  // static navigatorStyle = {
  // };
  
  state = {
    renderProgress: null,
    activeNeighbors: null,
    showResults: false,
  }
  
  
  static navigationOptions = {
    header: null,

    // title: 'app.json',
  };
  
  
  renderResults = () => {
    const { activeNeighbors } = this.state;
    const s = activeNeighbors > 1 ? 's' : '';
    const answer = activeNeighbors === 0 ?
    `You don't have any active neighbors ... :(` :
    `You have ${this.state.activeNeighbors} active neighbor${s}!`;
    return (
      <View id="results">
        <Text>{answer}</Text>
      </View>
    );
  }
  
  renderProgress = () => {
    return (
      <View className="Progress">
        <Text>searching ...</Text>
      </View>
    );
  }
  
  
  render() {
    let print = this.state.showResults === true ? this.renderResults() : 'Hi'
    return(
      <View>
      <View className="HomePage">
        <Text id="Welcome">Welcome to Bubble! Sign up and start meeting your neighbors</Text>
        <View>{this.renderResults()}</View>
      </View>
        <ScrollView style={{ marginTop: 200 }}>
      <NeighborsSearch />
    </ScrollView>
    </View>)
  }
}

{/* {this.state.renderProgress !== null ? this.renderProgress() : ' '} */}