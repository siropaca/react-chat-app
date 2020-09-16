import React from 'react';

import Button from '../components/button';

class ChatRoomPage extends React.Component {
  render() {
    return (
      <div>
        チャットルーム
        <Button name="登録" onClick={() => alert('Hello World')} primary={true} />
      </div>
    );
  }
}

export default ChatRoomPage;
