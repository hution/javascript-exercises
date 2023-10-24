const getTheTitles = function(content) {
    let bookList = []
    content.forEach(book => {
        bookList.push(book.title);
    });
    return bookList;
};

// Do not edit below this line
module.exports = getTheTitles;
