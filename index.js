const userImg=document.querySelector("[data-userImg]");
const Name=document.querySelector("[data-name]");
const userName=document.querySelector("[data-userName]");
const joinedDate = document.querySelector("[data-Date]");
const bio=document.querySelector("[data-bio]");
const repos=document.querySelector("[data-repos]")
const followers=document.querySelector("[data-followers]");
const following=document.querySelector("[data-following]");
const location=document.querySelector("[data-location]");
const twitter=document.querySelector("[data-twitter]");
const link =document.querySelector("[data-link]");
const business=document.querySelector("[data-business]");

    

const api_URL=`https://api.github.com/user/${userName}`;