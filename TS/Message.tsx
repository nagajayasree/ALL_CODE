import * as React from "react";

//component to Show a message on clicking anchor element,
//if clicked once again it hides the message.
export interface MessageProps {
  message: string;
}

export interface MessageState {
  msg: boolean;
}

class Message extends React.Component<MessageProps, MessageState> {
  constructor(props: MessageProps) {
    super(props);
    this.state = { msg: true };
  }
  buttonClick = () => {
    this.setState({ msg: !this.state.msg });
  };
  render() {
    return (
      <>
        <a href="#" onClick={this.buttonClick}>
          {this.props.message}
        </a>
        {this.state.msg ? "" : <p>Hello World!</p>}
      </>
    );
  }
}

export default Message;
