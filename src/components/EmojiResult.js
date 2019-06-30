import React from "react";
import EmojiResultItem from "./EmojiResultItem";

class EmojiResult extends React.Component {
  render() {
    const emojis = this.props.emojis;
    return (
      <div>
        {emojis.map(emoji => (
          <EmojiResultItem emoji={emoji} />
        ))}
      </div>
    );
  }
}

export default EmojiResult;
