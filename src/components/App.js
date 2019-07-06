import React from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResult from "./EmojiResult";
import {
  emojiFilter,
  pageCounter,
  emojiFilterPage
} from "../controller/actions";
import Paginate from "react-paginate";
import "../styles/Paginate.css";

class App extends React.Component {
  state = {
    inputText: "",
    filter: [],
    page: []
  };

  inputChange = event => {
    this.setState({
      inputText: event.target.value,
      filter: emojiFilter(event.target.value),
      page: emojiFilterPage(event.target.value)
    });
    this.paginate.state.selected = 0;
  };

  handlePageClick = data => {
    this.setState({
      page: emojiFilterPage(this.state.inputText, data.selected)
    });
  };

  componentDidMount() {
    this.setState({
      filter: emojiFilter(),
      page: emojiFilterPage()
    });
  }

  render() {
    const pageCount = pageCounter(this.state.filter);

    return (
      <div>
        <Header />
        <SearchInput onChange={this.inputChange} />
        <EmojiResult emojis={this.state.page} />
        <Paginate
          ref={node => (this.paginate = node)}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          previousLabel={"<<"}
          nextLabel={">>"}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pagination page"}
          activeClassName={"active"}
        />
      </div>
    );
  }
}

export default App;
