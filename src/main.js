"use strict";
//Task #1 - Get posts from remote API, iterate over them, and render them as new DOM nodes
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = yield response.json();
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
    });
}
const button = document.getElementById('button');
if (button) {
    button.addEventListener('click', getPosts);
}
//Task #2 - Create a function updateObjectInArray.ts - which has to update an object of a given shape in an array of uni-shaped objects and return a cloned array.
function updateObjectInArray(initialArray, key, value, patch) {
    const updatedArray = initialArray.map((obj) => {
        if (obj[key] === value) {
            return Object.assign(Object.assign({}, obj), patch);
        }
        else {
            return obj;
        }
    });
    return updatedArray;
}
console.log(updateObjectInArray([
    {
        userId: 1,
        name: 'Tanya'
    },
    {
        userId: 2,
        name: 'Oleg'
    }
], 'userId', 2, {
    userId: 2,
    name: 'Illiy'
}));
