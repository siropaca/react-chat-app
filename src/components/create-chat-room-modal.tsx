import React from 'react';
import styled from 'styled-components';
import InputText from './input-text';
import Button from './button';

interface CreateChatRoomModalProps {
  // モーダルの表示∕非表示の切り替え用フラグ
  isShow: boolean;
  // チャットルーム名が入力された場合のイベント
  onInputText: (e: React.FormEvent<HTMLDivElement>) => void;
  // チャットルーム名入力欄からフォーカスが外れた場合のイベント
  onBlurText: (e: React.FormEvent<HTMLDivElement>) => void;
  // 作成ボタンがクリックされた場合のイベント
  onClickButton: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

class CreateChatRoomModal extends React.Component<CreateChatRoomModalProps> {
  render() {
    return (
      <CreateChatRoomModalStyle isShow={this.props.isShow}>
        <div className="modal">
          <div>
            <InputText placeholder="チャットルーム名" onInput={this.props.onInputText} onBlur={this.props.onBlurText} />
          </div>
          <div className="button">
            <Button name="作成" onClick={this.props.onClickButton} primary />
          </div>
        </div>
      </CreateChatRoomModalStyle>
    );
  }
}

const CreateChatRoomModalStyle = styled.div<{ isShow: boolean }>`
  /* モーダルの表示∕非表示の切り替え */
  display: ${(props) => (props.isShow ? 'flex' : 'none')};
  justify-content: center;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.3);
  align-items: center;
  .modal {
    opacity: initial;
    background: rgba(255, 255, 255, 1);
    width: 500px;
    padding: 20px;
  }
  .button {
    margin-top: 10px;
    text-align: right;
  }
`;

export default CreateChatRoomModal;
