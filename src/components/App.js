import React from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResult from "./EmojiResult";
import { emojiFilter } from "../controller/actions";

class App extends React.Component {
  state = {
    filter: emojiFilter("")
  };
  inputChange = event => {
    this.setState({
      filter: emojiFilter(event.target.value)
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchInput onChange={this.inputChange} />
        <EmojiResult emojis={this.state.filter} />
      </div>
    );
  }
}

export default App;
