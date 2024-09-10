console.log("Rate Favourite Picture!");

const star = document.querySelectorAll(".star");
const rate = document.querySelector(".rate-hover");

console.log(star);      //return collection of NodeList items as an array

for(let i=0; i<star.length ; i++){
    star[i].starValue = (i+1);
    // star[i].addEventListener('click', function
    // (){
    //     console.log('clicked' + "you rating: " + star[i].starValue);
    // });  
    
    //multiple event(mosueout, mouseover, mouseenter)
    ["click", "mouseover", "mouseout"].forEach(function(e){
star[i].addEventListener(e, showRating);
    });


}

function showRating(e){
let type = e.type;
// console.log(type);
let starValue = this.starValue;
star.forEach(function(ele, index){
if(type === 'click'){
    if(index < starValue){
        ele.classList.add('orange')
    }else{
        ele.classList.remove('orange');
    }
}

if(type === 'mouseover'){
    if(index < starValue){
        ele.classList.add('yellow')
    }else{
        ele.classList.remove('yellow');
    }
}

if(type === 'mouseout'){
        ele.classList.remove('yellow')
}


if(type === 'click'){
    if(starValue > 1){
rate.innerHTML = "You rated " + starValue + "stars"
    }
}

})
}

function nextImage(){
    window.location.reload();
}