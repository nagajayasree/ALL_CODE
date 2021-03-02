import * as React from "react";

//using default state and props
export class Greet extends React.Component<{ msg: string }, { greet: string }> {
  state = { greet: "Gd mrng" };
  render() {
    return (
      <div>
        {this.props.msg}:{this.state.greet}
      </div>
    );
  }
}

//passing props and state using types
type MsgState = {
  msg: string;
};
type MsgProps = {
  greet: string;
};

export class DisplayMsg extends React.Component<MsgProps, MsgState> {
  state: MsgState = { msg: "Hello" };
  render() {
    return (
      <div>
        {this.props.greet}:{this.state.msg}
      </div>
    );
  }
}

//passing state and props using interface
interface GetMsgProps {
  msg: string;
}
interface GetMsgState {
  greet: string;
}
export class GetMsg extends React.Component<GetMsgProps, GetMsgState> {
  state: GetMsgState = { greet: "Hi" };
  render() {
    return (
      <div>
        {this.props.msg}:{this.state.greet}
      </div>
    );
  }
}


export interface PlayerProps {
  name: string;
}

export interface PlayerState {
  firstScore: number;
  secondScore: number;
}

class Player extends React.Component<PlayerProps, PlayerState> {
  constructor(props: PlayerProps) {
    super(props);
    this.state = { firstScore: 10, secondScore: 41 };
  }
  render() {
    return (
      <div>
        Avg Score:{(this.state.firstScore + this.state.secondScore) / 2}
      </div>
    );
  }
}

export default Player;
