import emojiList from "../data/emojiList.json";

const emojiFilter = (searchText = "", maxShow = 30) => {
  return emojiList
    .filter(emoji => {
      if (emoji.title.toLowerCase() === searchText.toLowerCase()) {
        return true;
      }
      if (emoji.keywords.includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, maxShow);
};

export { emojiFilter };
