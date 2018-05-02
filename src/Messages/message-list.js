import React, { Component } from 'react';

import MessageView from './message-view';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          from: 'Martha',
          content: `What's up? I'm Martha.`,
          status: 'read',
        },
        {
          from: 'Makar',
          content: 'Does he look like a bitch?',
          content: 'read',
        },
        {
          from: 'Daniel',
          content: 'Well, that\'s just, like, your opinion, man.',
          status: 'unread',
        }
      ]
    }
  }

  render() {
    return(
      <div>
        <h1>List of Messages</h1>
        { this.state.messages.map( message => <MessageView message={message} />) }
      </div>
    );
  }
}

export default MessageList;