import { useState, useRef } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const playerName = useRef();
  //   const [submitted, setSubmitted] = useState(false);

  //   function handleChange(e) {
  //     // setSubmitted(false);
  //     setEnteredPlayerName(e.target.value);
  //   }

  function handleClick() {
    // setSubmitted(true);
    setEnteredPlayerName(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "Noname"} </h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set name</button>
      </p>
    </section>
  );
}
