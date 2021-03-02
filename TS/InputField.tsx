import * as React from "react";

export const Text: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div>
      <input type="text" value={text} placeholder="input field" />
    </div>
  );
};

type Props = { msg: string };
export const InputField2 = ({ msg }: Props) => {
  return (
    <div>
      <input type="text" value={msg} />
    </div>
  );
};
