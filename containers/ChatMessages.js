import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

class Messages extends Component {
  constructor(props) {
    super(props);
    this.renderMessages = this.renderMessages.bind(this);
    this.renderMessage = this.renderMessage.bind(this)
    this.render = this.render.bind(this)
  }

  // componentDidMount() {
  //   this.scrollToBottom();
  // }
  //
  // componentDidUpdate() {
  //   this.scrollToBottom();
  // }
  //
  // scrollToBottom = () => {
  //   const scrollHeight = this.el.scrollHeight;
  //   const height = this.el.clientHeight;
  //   const maxScrollTop = scrollHeight - height;
  //   this.el.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  // }

  renderMessage = (msg, i) => {
    if(!this.props.users[msg.from]) return (
      <View>
        <Text>NO user</Text>
      </View>
    );
    const { username } = this.props;
    const userColor = {backgroundColor: this.props.color};
    // const space = { whiteSpace:'pre' };
    const color = this.props.users[msg.from].avatar_color;
    const neighborColor = {backgroundColor: color};
    if (msg.from === username) return (
      <View key={i}>
      <Text style={userColor} className="userMsg">{msg.msg}</Text>
      <Text>Username</Text>
      </View>
    )
    else return (
      <View key={i} className="neighborsMsg" style={neighborColor}>
        <Text>{msg.name} </Text>
        <Text>{msg.msg}</Text>
        <Text>Other Mesg</Text>
      </View>
    )
  }

  renderMessages = () => {
    // let debugInfo = this.debugRenderMessages(); if(debugInfo!==true) return debugInfo
    const { messages } = this.props
    return messages.map((msg, i) => this.renderMessage(msg, i));
  }

  // renderTyping = () => {
    //   if(!this.props.isTyping) return null;
    //   else {
      //     var str = '';
      //     var count = 0;
      //     let obj = this.props.isTyping;
      //     for (let key in obj) {
  //       if (obj.hasOwnProperty(key)) {
    //         if (obj[key] === true) {
      //           str+=key;
      //           count++;
      //           if (count > 0) str+=' & '
      //         }
      //       }
      //     }
      //   }
      //   if (count === 0) return '';
  //   else {
    //     str = str.trim().substring(0, str.length - 2);
  //     if (count === 1) return `${str} is typing..`;
  //     if (count < 4 ) return `${str} are typing..`;
  //     else return;
  //   }
  // }

  render() {
    return (
      <View className="MessagesContainer">

        <View className="Messages" ref={(el) => this.el = el}>
          {this.renderMessages()}
        </View>
        <View className="IsTypingContainer">
          <Text className="isTyping">this.renderTyping()</Text>
        </View>

      </View>
    );
  }

  //////////////// debug stuff //////////////////


    debugRenderMessages = () => {
      console.log('HERE',this.props)
      if (!this.props) return (
        <View>
          <Text>NO props</Text>
        </View>
      );
      if (!this.props.messages) return (
        <View>
          <Text>NO messages</Text>
        </View>
      );
      const { messages } = this.props //.messages;
      if (messages === undefined || messages.length === 0) return (
        <View>
          <Text>Something went wrong</Text>
        </View>
      );
      return true
    }

}

// const mapStateToProps = (state) => ({
//   users: state.users,
//   isTyping: state.typing,
// });
//
// const mapDispatchToProps = (dispatch) => ({
//
// });

export default Messages;
// export default connect(mapStateToProps, mapDispatchToProps)(Messages);
