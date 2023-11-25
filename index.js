const userImg=document.querySelector("[data-userImg]");
const userKaName=document.querySelector("[data-name]");
const gitUserName=document.querySelector("[data-userName]");
const joinedDate = document.querySelector("[data-Date]");
const bio=document.querySelector("[data-bio]");
const repos=document.querySelector("[data-repos]")
const followers=document.querySelector("[data-followers]");
const following=document.querySelector("[data-following]");
const userLocation=document.querySelector("[data-location]");
const twitter=document.querySelector("[data-twitter]");
const link =document.querySelector("[data-link]");
const business=document.querySelector("[data-business]");
const searchForm=document.querySelector(".form-container");

const allDataContainer=document.querySelector(".all-data-container");
const userFound=document.querySelector(".user-not-found");
const loaderScreen=document.querySelector(".loader-screen");
const dark=document.querySelector("#dark");
const light=document.querySelector("#light");
// ---------------color changing element-----------------------
const bodyEle=document.body;
const formInput=document.querySelector(".form-input");
const userDataContainer=document.querySelector(".user-data-container");
const userDataValue=document.querySelectorAll(".user-data-value");
const socialImg=document.querySelectorAll(".social-img");

const searchInput=document.querySelector("[data-searchInput]");
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    allDataContainer.classList.remove("active");
    let userName=searchInput.value;
    fetchUserData(userName);
   
});

async function fetchUserData(userName){
    loaderScreen.classList.add("active");
    userFound.classList.remove("active");
    try{
        loaderScreen.classList.add("active");
        console.log(userName);
        const response = await fetch (`https://api.github.com/users/${userName}`);
        const data=await response.json();
        console.log(data.id);
        if(!response.ok){
            loaderScreen.classList.add("active");
            allDataContainer.classList.remove("active");
            userFound.classList.add("active");
            console.log("User Doesnt't exist ");
        }
        else{
            allDataContainer.classList.add("active");
            userFound.classList.remove("active");
            renderUserData(data);
        } 
    }

    catch(err){
        console.log("error in function fetchUserData",err);
    }
    finally{
        loaderScreen.classList.remove("active");
    }
}

async function renderUserData(data){
    userImg.src=data.avatar_url;
    userKaName.innerHTML=data.name;
    gitUserName.innerHTML=`@${data.login}`;
    gitUserName.href=data.html_url;
    joinedDate.innerHTML= `Joined On: ${(new Date(data.created_at).getDate()) + "/"+ (new Date(data.created_at).getMonth())+"/"+(new Date(data.created_at).getFullYear())}`;
    bio.innerHTML=data.bio||"This Profile has no Bio";
    repos.innerHTML=data.public_repos||'0';
    followers.innerHTML=data.followers||'0';
    following.innerHTML=data.following||'0';
    userLocation.innerHTML=data.location||'Not Available';
    twitter.innerHTML=data.twitter_username||'Not Available';
    link.innerHTML=data.email||'Not Available';
    business.innerHTML=data.company||'Not Available';
}
// =============================dark&light==================================
dark.addEventListener("click",nightFilter);
light.addEventListener("click",dayFilter);

function nightFilter(){
    light.classList.add("active");
    dark.classList.add("inactive");
    bodyEle.style.backgroundColor='#141D2F';
    formInput.style.backgroundColor='#1E2A47';
    formInput.style.color='#ffffff';
    allDataContainer.style.backgroundColor='#1E2A47';
    userDataContainer.style.backgroundColor='#141D2F';
    bodyEle.style.color='#FFFFFF';

    userDataValue.forEach(ele =>{
        ele.style.color="#ffffff"
    });
    socialImg.forEach(ele => {
        ele.classList.add("active");
    });
}

function dayFilter(){
    light.classList.remove("active");
    dark.classList.remove("inactive");
    bodyEle.style.backgroundColor='#f6f8ff';
    formInput.style.backgroundColor='#fefefe';
    formInput.style.color='#4b6a9b';
    allDataContainer.style.backgroundColor='#fefefe';
    userDataContainer.style.backgroundColor='#f6f8ff';
    bodyEle.style.color='#4b6a9b';

    userDataValue.forEach(ele =>{
        ele.style.color="#2b3442"
    });
    socialImg.forEach(ele => {
        ele.classList.remove("active");
    });
}