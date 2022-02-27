export function convertTitleToUrl(post) {
  return post.title.replace(/[.,\/#!$%?\^&\*;:{}=\-_`~()]/g,"").split(' ').join('-');
}

export function getPastMonth(minus) {
  const x = new Date();
  x.setDate(1);
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
      if(post.month == mm) {
          posts.push(post)
      }
    });
  }
  return posts;
}

export function getMonthString(month) {
  switch(month) {
    case 1:
      return 'Jan';
      break;
    case 2:
      return 'Feb';
      break;
    case 3:
      return 'March';
      break;          
    case 4:
      return 'April';
      break;
    case 5:
      return 'May';
      break;
    case 6:
      return 'June';
      break;
    case 7:
      return 'July';
      break;
    case 8:
      return 'Aug';
      break;          
    case 9:
      return 'Sept';
      break;
    case 10:
      return 'Oct';
      break
    case 11:
      return 'Nov';
      break;
    case 12:
      return 'Dec';
      break
    default:
      break;
  }
}