import React, { Component } from 'react';
import AddressAutoComplete from '../containers/AddressAutoComplete';
import { ScrollView, TextInput, StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import GoogleAutocomplete from '../components/placesAutocomplete'
class NeighborsSearch extends Component {

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.input.state.address === '') return;
    this.props.handleSearch(this.input.state.address);
  }

  render() {
    return (
      <View className="NeighborsSearch">
          <ScrollView>
        <View><Text>Check who is active in your building:</Text></View>
          <View id="SearchContainer">
        {/* <TextInput onSubmit={this.handleFormSubmit}>
        </TextInput> */}
          <GoogleAutocomplete />
            <View><Button
              raised
              icon={{ name: 'home', size: 32 }}
              buttonStyle={{ backgroundColor: 'red', borderRadius: 10 }}
              textStyle={{ textAlign: 'center' }}
              title={`Sign In`}
              /></View>
          </View>
        </ScrollView>
              
        <View style={{ paddingTop: 100 }}><Button/></View>
      </View>
    );
  }

}

export default NeighborsSearch;
