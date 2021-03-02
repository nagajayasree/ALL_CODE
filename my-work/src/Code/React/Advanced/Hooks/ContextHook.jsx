import React, { useContext, createContext } from "react";
import { useState } from "react";

// const themes = {
//   light: {
//     foreground: "#000000",
//     background: "#eeeeee",
//   },
//   dark: {
//     foreground: "#ffffff",
//     background: "#222222",
//   },
// };

const buttons = {
  add: {
    textColor: "white",
    background: "blue",
    margin: "10px",
  },
  delete: {
    textColor: "black",
    background: "red",
    margin: "10px",
  },
};

// const ThemeContext = createContext(themes.light);
const ButtonContext = createContext(buttons.delete);

const ContextHook = () => {
  return (
    // <ThemeContext.Provider value={themes.dark}>
    //   <Toolbar />
    // </ThemeContext.Provider>
    <>
      <ButtonContext.Provider value={buttons.add}>
        <AddButton />
      </ButtonContext.Provider>
      <br />
      <ButtonContext.Provider value={buttons.delete}>
        <DeleteButton />
      </ButtonContext.Provider>
    </>
  );
};

function AddButton() {
  const [count, setCount] = useState(0);
  const button = useContext(ButtonContext);
  return (
    <>
      {count}
      <button
        onClick={() => setCount(count + 1)}
        style={{
          backgroundColor: button.background,
          color: button.textColor,
          marginTop: button.margin,
        }}
      >
        Add
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

function DeleteButton() {
  const button = useContext(ButtonContext);
  return (
    <>
      <button
        style={{
          backgroundColor: button.background,
          color: button.textColor,
          marginTop: button.margin,
        }}
      >
        Delete
      </button>
    </>
  );
}

// function Toolbar() {
//   return (
//     <>
//       <Button />
//       <Title />
//     </>
//   );
// }

// function Title() {
//   const theme = useContext(ThemeContext);
//   return (
//     <>
//       <p style={{ backgroundColor: theme.background, color: theme.foreground }}>
//         This is a Title
//       </p>
//     </>
//   );
// }

// function Button() {
//   const theme = useContext(ThemeContext);
//   return (
//     <button
//       style={{ backgroundColor: theme.background, color: theme.foreground }}
//     >
//       Styled by background context
//     </button>
//   );
// }
export default ContextHook;
