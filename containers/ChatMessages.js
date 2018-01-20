import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// const dummyProps = {
//     username: 'Andrea',
//     color: 'fuchsia',
//     users: [
//       'Andrea': {
//         avatar_color: 'navy'
//       },
//       'Achim': {
//         avatar_color: 'navy'
//       },
//     ],
//     messages: [
//       {
//         from: 'Andrea',
//         msg: 'hello Achim',
//       },
//       {
//         from: 'Achim',
//         msg: 'hello Andrea',
//       }
//     ]
//   }

class Messages extends Component {

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
    if(!this.props.users[msg.from]) return null;
    const { username } = this.props;
    const userColor = {backgroundColor: this.props.color};
    const space = { whiteSpace:'pre' };
    const color = this.props.users[msg.from].avatar_color;
    const neighborColor = {backgroundColor: color};
    if (msg.from === username) return (
      <Text style={userColor} key={i} className="userMsg">{msg.msg}</Text>
    )
    else return (
      <View key={i} className="neighborsMsg" style={neighborColor}>
        <Text style={space}>{msg.name} </Text>
        <Text>{msg.msg}</Text>
      </View>
    )
  }

  renderMessages = () => {
    if(!this.props.messages) return null;
    const { messages } = this.props.messages;
    if (messages === undefined || messages.length === 0) return null;
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
