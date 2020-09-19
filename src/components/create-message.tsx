import React from 'react';
import styled from 'styled-components';

import InputText from './input-text';
import Button from './button';

interface CreateMessageProps {
  // メッセージが入力された場合のイベント
  onInputText: (e: React.FormEvent<HTMLDivElement>) => void;
  // メッセージ入力欄からフォーカスが外れた場合のイベント
  onBlurText: (e: React.FormEvent<HTMLDivElement>) => void;
  // 投稿ボタンがクリックされた場合のイベント
  onClickButton: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

class CreateMessage extends React.Component<CreateMessageProps> {
  render() {
    return (
      <CreateMessageStyle>
        <div className="input">
          <InputText placeholder="メッセージ" onInput={this.props.onInputText} onBlur={this.props.onBlurText} />
        </div>
        <div className="button">
          <Button name="投稿" onClick={this.props.onClickButton} primary />
        </div>
      </CreateMessageStyle>
    );
  }
}

const CreateMessageStyle = styled.div`
  display: grid;
  grid-template-rows: 80px;
  grid-template-columns: 1fr 80px;
  align-items: center;
  .input {
    padding: 10px;
  }
`;

export default CreateMessage;
