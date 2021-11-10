const book={
    name:'Draft of happiness',
    author:'Noam Horev',
    age:'adult',
    publishing_year:2019,
}
const Catalog=(n)=>{
    book[n];
    console.log("The book " ,book.name," was written by ", book.author," in the year " ,book.publishing_year);
}
Catalog("Draft of happiness");