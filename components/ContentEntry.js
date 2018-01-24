import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import DoneBar from 'done-bar';

const inputStyle = {marginLeft:5, marginRight:5, padding:10, borderColor: 'gray', borderWidth: 10}

class ContentEntry extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: '',
      keyboardType: 'default',
    }
  }

  render = () => {
    // let inputStyle = this.props.inputStyle || inputStyle
    console.log(this.props.doneHandler);
    return (
      <View>
        <TextInput
          placeholder = "Add new message"
          defaultValue = {this.state.text}
          onChangeText={(text) => this.setState({text})}
          style = {inputStyle}
          multiline = {true}
          editable = {true}
          numberOfLines = {4}
        />
        <DoneBar
          onDone={()=>this.props.doneHandler(this.state.text)}
          keyboardType={this.state.keyboardType}
          includeLayoutAnimation={false}
        />
      </View>
    )
  }
}

export default ContentEntry
