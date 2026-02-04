import { useState } from "react";
import Confetti from "react-confetti";
import "./App.css";

function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noIndex, setNoIndex] = useState(0);
  const [hoverCount, setHoverCount] = useState(0);
  const [shake, setShake] = useState(false);
  const [yesScale, setYesScale] = useState(1);
  const [noOpacity, setNoOpacity] = useState(1);

  const noMessages = [
    "NO 🥺",
    "Are you sure? 🥺",
    "Think again 💭",
    "That hurts 😭",
    "Please? 🥹",
    "mera dil mat tod please 💔",
    "You’re enjoying this, aren’t you? 😤",
    "I’m getting nervous 😳",
    "Last chance 😶",
    "Tuje maza ara na ye karne mai😐",
    "Thik hai karti reh 😭❤️",
    "Thik hai karti reh gayab hojaega😤",
  ];

  const handleNoHover = (e) => {
    // Move button
    e.target.style.position = "absolute";
    e.target.style.top = Math.random() * 80 + "%";
    e.target.style.left = Math.random() * 80 + "%";

    // Shake
    setShake(true);
    setTimeout(() => setShake(false), 300);

    // Messages
    setNoIndex((prev) =>
      prev < noMessages.length - 1 ? prev + 1 : prev
    );

    // Yes button grows
    setYesScale((prev) => prev + 0.08);

    // No button fades
    setNoOpacity((prev) => prev - 0.07);

    // Auto Yes after 10 hovers
    // Just count hovers (no auto accept)
    setHoverCount((prev) => prev + 1);

  };

  return (
    <div className="container">
      {yesClicked && <Confetti />}

      {!yesClicked ? (
        <>
          <h1 className="title">Will you be my Valentine ? 💘</h1>
           <h1>HI this is from another branch</h1>
          {/* <p className="no-text"></p> */}

          <div className="buttons">
            <button
              className="yes"
              style={{ transform: `scale(${yesScale})` }}
              onClick={() => setYesClicked(true)}
            >
              Yes 💖
            </button>

            <button
              className={`no ${shake ? "shake" : ""}`}
              style={{ opacity: noOpacity }}
              onMouseEnter={handleNoHover}
            >
              {noMessages[noIndex]}
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className="final-text">Yayyyyyyy! I LOVE YOU BABYYYY 🥰💞</h1>

          {/* Background music */}
          <audio autoPlay loop>
            <source src="/love.mp3" type="audio/mp3" />
          </audio>
        </>
      )}
    </div>
  );
}

export default App;
