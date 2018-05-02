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
    const messageViews = this.state.messages.map( (message, index) => <MessageView message={message} key={index} /> );

    return(
      <div>
        <h1>List of Messages</h1>
        { messageViews }
      </div>
    );
  }
}

export default MessageList;