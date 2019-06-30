import React from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResult from "./EmojiResult";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SearchInput />
        <EmojiResult />
      </div>
    );
  }
}

export default App;
