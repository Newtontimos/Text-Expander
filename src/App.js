import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <TextExpander>
        In the heart of West Africa, a nation stands tall, With vibrant
        landscapes and stories to enthrall. Nigeria, a land of contrasts and
        allure, Where cultures converge, vibrant and pure.
      </TextExpander>

      <TextExpander
        collapseNumWords={20}
        expandButtonText="show text"
        collapseButtonText="collapse text"
        buttonColor="#ff6622"
      >
        In the heart of the nation, Abuja stands bold, A symbol of unity, where
        dreams unfold. Amidst the skyline, the Aso Rock stands tall, Guarding
        the dreams of millions, one and all.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        To the west, Yoruba spirits dance in the breeze, Their drums resounding,
        captivating with ease. Beneath the Ogun River’s watchful gaze, They
        celebrate life in vibrant displays.
      </TextExpander>
    </div>
  );
}

function TextExpander({
  collapseNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "blue",
  expanded = false,
  className,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split("").slice(0, collapseNumWords).join("") + "...";

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };
  return (
    <div className={className}>
      <span>{displayText}</span>
      <button
        onClick={() => setIsExpanded((expanded) => !expanded)}
        style={buttonStyle}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
