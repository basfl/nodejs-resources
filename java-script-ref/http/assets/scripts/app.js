// const submit=document.querySelector("#new-post button");

const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");


class Post {
    constructor(title, content, userId) {
        this.title = title;
        this.body = content;
        this.userId = userId;
    }
}


const sendHttprequest = (method, url, data) => {
    const promise = new Promise((resolver, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.onload = function () {
            if (xhr.status >=200 && xhr.status < 300) {
                resolver(xhr.response)
            } else {
                reject(new Error("something went worng!1"))
            }

        };
        xhr.onerror = function () {
            console.log(xhr.response);
            console.log(xhr.status);
            reject(new Error("failed"));
        }
        xhr.send(JSON.stringify(data));
    });
    return promise;
}

const fetchposts = async () => {
    try {

        const responsedata = await sendHttprequest("GET", "https://jsonplaceholder.typicode.com/posts");
        const listOfPosts = responsedata;
        for (const post of listOfPosts) {
            const postEl = document.importNode(postTemplate.content, true);
            postEl.querySelector('h2').textContent = post.title.toUpperCase();
            postEl.querySelector('p').textContent = post.body;
            postEl.querySelector('li').id = post.id;
            listElement.append(postEl);
        }
    } catch (error) {
        console.log(error);

    }


}

const createPost = async (title, content) => {
    userId = Math.random();
    const post = new Post(title, content, userId);
    try {
        const responsedata = await sendHttprequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
        console.log("post->", responsedata);
    } catch (error) {
        console.log(error);
    }


}

const submitHnadler = (event) => {
    event.preventDefault();
    const title = event.currentTarget.querySelector("#title").value;
    const content = event.currentTarget.querySelector("#content").value;
    createPost(title, content);
}

fetchButton.addEventListener("click", fetchposts);
form.addEventListener("submit", submitHnadler);
postList.addEventListener("click", event => {
    if (event.target.tagName === "BUTTON") {
        const postId = event.target.closest("li").id;
        console.log("deleted", postId);
        try {
            sendHttprequest("DELETE", `https://jsonplaceholder.typicode.com/posts/${postId}`);
        } catch (error) {
            console.log(error);
        }

    }
})




//https://jsonplaceholder.typicode.com/posts
// const submitHandler=(event)=>{
//     event.preventDefault();
//     console.log("clicked",event);
// }
// submit.addEventListener("click",submitHandler);