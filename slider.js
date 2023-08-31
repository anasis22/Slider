const parent = document.querySelector(".parent");
const wrapper = document.querySelector(".wrapper");
const img = document.querySelector("img");
const rightBtn = document.querySelector(".rightBtn");
const leftBtn = document.querySelector(".leftBtn");
const navs = document.querySelectorAll(".nav");




let myArr = [

    "https://images.unsplash.com/photo-1551501438-e61a59a1fd75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2129&q=80",
    "https://images.unsplash.com/photo-1551501419-cb31cdd588d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2129&q=80",
    "https://images.unsplash.com/photo-1589124859206-e27c8de83b58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1713&q=80",
    "https://images.unsplash.com/photo-1617719816315-cace4f138bee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1567349734430-c6a023a999e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1598454444233-9dc334394ed3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"

]



let nav = [
   navs[0] , navs[1] , navs[2] , navs[3] , navs[4]
]


let i = 0;


navs[0].classList.add("active");
rightBtn.addEventListener('click',(e) => {
  navs[i].classList.remove("active");
  
  i++;
  if(i === myArr.length){
    i=0;
  }

  img.setAttribute('src',myArr[i]);
  navs[i].classList.add("active");

})




leftBtn.addEventListener('click',(e) => {

  navs[i].classList.remove("active");
  if(i === 0){
    i = myArr.length ;
  }

  i-- ;
  img.setAttribute('src',myArr[i]) ;
  navs[i].classList.add("active");

})


let j = 0;
navs.forEach((el,index) => { 
  el.addEventListener('click',(e) => {
    navs[0].classList.remove("active");
    img.setAttribute('src',myArr[index]);
  })
  
  
})



















