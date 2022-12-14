const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];

const processedBooks = books.map(el => el = { displayedAuthor: el.author.trim().split(' ').reverse().join(', '), ...el })
processedBooks.sort((a, b) => { return b.author.trim().split(' ')[1] < a.author.trim().split(' ')[1] ? 1 : -1 });
console.log(processedBooks);
for (const book of processedBooks) {
  document.querySelector('.book-list.card-column').innerHTML += (`
  <div class="card book" style="width: 18rem;">
  <img class="card-img-top book-cover h-100" src="${book.img}" alt="${book.title} cover image">
  <div class="card-body">
    <h5 class="card-title">${book.title}</h5>
    <p class="card-text text-muted">${book.author}</p>
  </div>
  <div class="card-body card-footer d-flex d-flex justify-content-end align-items-center" style='min-height:70px'>
    <div class="rounded-pill px-2 card-link well status text-light ${book.alreadyRead ? 'bg-success' : 'bg-secondary'}">${book.alreadyRead ? 'Read' : 'To read'}</div>
  </div>
</div>
`);
}