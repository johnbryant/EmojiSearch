import React from "react";
import "../styles/EmojiResultItem.css";

const EmojiResultItem = ({ emoji }) => {
  const codePointHex = emoji.symbol.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
  return (
    <div
      className="emoji-result-item copy-to-clipboard"
      data-clipboard-text={emoji.symbol}
    >
      <span className="left-container">
        <img src={src} />
        <span className="title">{emoji.title}</span>
      </span>

      <span className="info">Click to copy Emoji</span>
    </div>
  );
};

export default EmojiResultItem;
