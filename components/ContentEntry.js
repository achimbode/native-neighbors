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

const inputStyle = {marginLeft:5, marginRight:5, padding:10, borderColor: 'gray', borderWidth: 1}

class ContentEntry extends Component {

  constructor(props) {
    super(props)
    this.state = {text: ''}
  }

  render = () => {
    let inputStyle = this.props.inputStyle || inputStyle
    return (
      <View>
        <TextInput
          placeholder = "Add new message"
          value = {this.state.text}
          style = {inputStyle}
          multiline = {true}
          editable = {true}
          numberOfLines = {4}
        />
        <DoneBar
          keyboardType={this.state.keyboardType}
          onDone={this.props.doneHandler}
        />
      </View>
    )
  }
}

export default ContentEntry
