const book = {
  book1: {
    name: "shut",
    author: "tom",
    year: 2020,
  },
  book2: {
    name: "shut",
    author: "tom",
    year: 2020,
  },
};
const bookUtils = {
  getFirstPublished: function (a, b) {
    return a.year > b.year ? a.book : b.book;
  },
};
bookUtils.getFirstPublished("book1", "book2");
