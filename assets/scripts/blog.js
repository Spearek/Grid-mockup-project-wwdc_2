'use strict';

const posts = document.querySelectorAll('.post');
const url='/blog.json';
const blogBtn = document.querySelector('.button--blog');
const postsContainer = document.querySelector('#posts-container');

const newPostHandler = () =>{
    let post =document.createElement('div');
    let domString= '<div class="post"><div class="post__date"><p>14<br/> NOV</p></div><div class="post__summary"><h3 class="post__summary__title">Growing Food and a "Thirst" for Innovation</h3><p class="post__summary__author">By Auskteez - 3 hours ago</p></div></div>';
    post.innerHTML = domString;
    document.body.appendChild(post.firstChild); 
};


window.onload = function(){
    const XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
        if (XHR.readyState == 4 && XHR.status == 200){
            const postsArray = JSON.parse(XHR.responseText);
            posts.forEach((el,position) =>el.style.backgroundImage = "url('" + postsArray.blog[position].BackgroundImage + "')");
        }
    }
    XHR.open("GET", url);
    XHR.send();

}

blogBtn.addEventListener('click',newPostHandler);
console.log(postsContainer);
