//Task #1 - Get posts from remote API, iterate over them, and render them as new DOM nodes

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPosts(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json() as Post[];

  const postElements = posts.map(post => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    const title = document.createElement('h3');
    title.innerText = post.title;

    const body = document.createElement('p');
    body.innerText = post.body;

    postDiv.appendChild(title);
    postDiv.appendChild(body);

    return postDiv;
  });

  const container = document.getElementById('posts-container');
  if (container) {
    container.append(...postElements);
  }

  return posts;
}

const button = document.getElementById('button');
if (button) {
  button.addEventListener('click', getPosts);
}

//Task #2 - Create a function updateObjectInArray.ts - which has to update an object of a given shape in an array of uni-shaped objects and return a cloned array.

function updateObjectInArray<ObjectShape extends Record<string, any>>(
  initialArray: ObjectShape[],
  key: keyof ObjectShape,
  value: ObjectShape[keyof ObjectShape],
  patch: Partial<ObjectShape>
): ObjectShape[] {
  const updatedArray = initialArray.map((obj) => {
    if (obj[key] === value) {
      return { ...obj, ...patch };
    } else {
      return obj;
    }
  });
  return updatedArray;
}
// to check this function, please, use this log
// console.log(updateObjectInArray([
//  {
//   userId: 1,
//   name: 'Tanya'
//  },
//  {
//   userId: 2,
//   name: 'Oleg'
//  }
// ],
//  'userId',
//  2,
//  {
//   userId: 2,
//   name: 'Illiy'
// }))
