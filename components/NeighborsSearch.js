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
        <View><Text>Check who is active in your building:</Text></View>
          <View id="SearchContainer">
        {/* <TextInput onSubmit={this.handleFormSubmit}>
        </TextInput> */}
        <ScrollView>
          <GoogleAutocomplete />
        </ScrollView>
            <View><Button type="submit" id="SearchButton">Search</Button></View>
          </View>
      </View>
    );
  }

}

export default NeighborsSearch;
