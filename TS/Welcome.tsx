import * as React from "react";

type Props = { message?: string; lastName?: string; firstName?: string };
const Welcome = ({ message }: Props) => <div>{message}</div>;
export default Welcome;

export const WelcomeUser: React.FunctionComponent<{ user: string }> = ({
  user,
}) => <div>Welcome {user}</div>;

export const WelcomeMessage = ({ lastName, firstName }: Props) => {
  if (lastName) {
    return <div>Welcome Mr.{lastName}</div>;
  } else {
    return <div>Welcome Mr.{firstName}</div>;
  }
};
