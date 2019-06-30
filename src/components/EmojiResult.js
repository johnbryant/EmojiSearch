import React from "react";
import EmojiResultItem from "./EmojiResultItem";
import ClipBoard from "clipboard";

class EmojiResult extends React.Component {
  componentDidMount() {
    this.clipboard = new ClipBoard(".copy-to-clipboard");
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }
  render() {
    const emojis = this.props.emojis;
    return (
      <div>
        {emojis.map(emoji => {
          return <EmojiResultItem key={emoji.title} emoji={emoji} />;
        })}
      </div>
    );
  }
}

export default EmojiResult;
