import emojiList from "../data/emojiList.json";

const emojiFilter = (searchText = "", currentPage = 0, maxPerPage = 20) => {
  return emojiList.filter(emoji => {
    if (emoji.title.toLowerCase() === searchText.toLowerCase()) {
      return true;
    }
    if (emoji.keywords.includes(searchText)) {
      return true;
    }
    return false;
  });
};

const emojiFilterPage = (searchText = "", currentPage = 0, maxPerPage = 20) => {
  return emojiFilter(searchText, currentPage, maxPerPage).slice(
    currentPage * maxPerPage,
    (currentPage + 1) * maxPerPage
  );
};

const pageCounter = (list = emojiList, maxPerPage = 20) => {
  return Math.floor(list.length / maxPerPage) + 1;
};

export { emojiFilter, emojiFilterPage, pageCounter };
