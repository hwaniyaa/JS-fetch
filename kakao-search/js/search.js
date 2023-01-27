
const thumbnail = document.querySelector(".list");
const btnSearch = document.querySelector(".btn-search");
const searchTxt = document.querySelector(".search-txt");
const recentSearchWord =document.querySelector(".recent-search-word");


const recentSearchWordArray = JSON.parse(localStorage.getItem("recentSearchWord")) ?? [];
if(recentSearchWord !== null) {
  recentSearchWordArray.forEach(function(item,idx){
    recentSearchWord.innerHTML += `<li>${item}</li>`;
  });
  const recentSearchWordItem = document.querySelectorAll("li");
  recentSearchWordItem.forEach(function(item,idx){
    item.addEventListener("click",function(){
      const txt = item.textContent;
      searchImg(txt);
    })
  })
}


searchTxt.addEventListener("keyup", function(e){
  const txt =  searchTxt.value;
  console.log(e.keyCode)
  if(e.keyCode === 13) {
    
    
    if(!recentSearchWordArray.includes(txt)) {
      recentSearchWordArray.push(txt);
      recentSearchWord.innerHTML += `<li>${txt}</li>`;
      localStorage.setItem("recentSearchWord",JSON.stringify(recentSearchWordArray))
      
    }
    console.log(recentSearchWordArray);
    searchImg(txt);
    
  }
});

function searchImg(searchTxt){
  thumbnail.innerHTML = "";
  const myFetch = fetch(`http://dapi.kakao.com/v2/search/image?query=${searchTxt}`,{
  headers:{
  Authorization: "KakaoAK ddf7648e82b466cf7876cd098a3d59a5",
},
});
myFetch
.then(function(response){
  return response.json()
})
.then(function(reslut){
  // console.log(reslut.documents);
  reslut.documents.forEach(function(item,idx){
    thumbnail.innerHTML += `<li><a href="${item.image_url}" data-fancybox="gallery"><img src="${item.thumbnail_url}"></a></li>`
  });
  gsap.from(".list li", {scale: 0, stagger: {each:0.01,from:"random"}}) //stagger css 순서대로

})
.catch(function(){
  console.log("거절된 상태")
})
.finally(function(){
  console.log("무조건 나옴")
})
console.log(myFetch);
}



