export function convertTitleToUrl(post) {
  if (post && post.title) {
    return post.title.replace(/[.,\/#!$%?\^&\*;:{}=\-_`~()]/g,"").split(' ').join('-');
  }
}

export function getPastMonth(minus) {
  let numY = Math.floor(minus/12);
  if (numY > 0) {
    minus = minus%12;
  }

  const x = new Date();
  x.setDate(1);
  x.setFullYear(x.getFullYear()-numY);
  x.setMonth(x.getMonth()-minus);
  return x;
}

export function getBlogPosts(blogs, numMonths) {
  let posts = [];
  for(let x = numMonths; x >= 0; x--) {
    const date = getPastMonth(x);
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();

    blogs.map((post, index) => {
      if(post.month == mm && post.year == yyyy) {
          posts.push(post)
      }
    });
  }
  return posts;
}

export function getMonthString(month) {
  const monthNames = ["Jan", "Feb", "March", "April", "May", "June",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];
  return monthNames[month - 1];
}

export function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}