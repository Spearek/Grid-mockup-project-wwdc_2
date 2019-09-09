'use strict';

let posts = document.querySelectorAll('.post');
const url='./blog.json';
const blogBtn = document.querySelector('.button--blog');
const postsContainer = document.querySelector('#posts-container');

let blogPosts;
let counter = posts.length;

const newPostHandler = () =>{
    if (counter < blogPosts.length){
        let post = document.createElement('div');
        let domString = '<div class="post"><div class="post__date"><p>'+blogPosts[counter].dateDay+'<br/>'+blogPosts[counter].dateMonth+'</p></div><div class="post__summary"><h3 class="post__summary__title">'+blogPosts[counter].title+'</h3><p class="post__summary__author">'+ blogPosts[counter].author +'</p></div></div>';
        post.innerHTML = domString;
        postsContainer.appendChild(post.firstChild); 
        posts = document.querySelectorAll('.post');
        posts[counter].style.backgroundImage = "url('" + blogPosts[counter].BackgroundImage + "')";
        counter++;
    }
};


window.onload = function(){
    const XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
        if (XHR.readyState == 4 && XHR.status == 200){
            const postsArray = JSON.parse(XHR.responseText);
            blogPosts = postsArray.blog;
            posts.forEach((el,position) =>el.style.backgroundImage = "url('" + blogPosts[position].BackgroundImage + "')");
        }
    }
    XHR.open("GET", url);
    XHR.send();

}

blogBtn.addEventListener('click',newPostHandler);
