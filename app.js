const heading = document.querySelector(".heading");
const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const roll = document.querySelector(".roll");


const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomImage = "die" +  randomNumber1 + ".png";
const randomImageView = "img/" + randomImage;
const image = document.querySelectorAll("img")[0];








const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const randomImage1 = "die" +  randomNumber2 + ".png";
const randomImageView2 = "img/" + randomImage1
const image5 = document.querySelectorAll("img")[1];



image.setAttribute("src", randomImageView);
    image5.setAttribute("src", randomImageView2);

    if(randomNumber1 > randomNumber2){
        document.querySelector('h1').innerHTML = "🏳" + "Player1 wins!"
    }
    else if (randomNumber1 < randomNumber2){
        document.querySelector('h1').innerHTML = "Player2 Wins!" + "🏴‍☠️" 
    }
    else
    document.querySelector('h1').innerHTML = "Its a Draw! "

  roll.addEventListener("click", ()=>{
      
    location.reload();
   
    image5.style.transform = "rotate(45deg)";
    image.style.transform = "rotate(-45deg)";
        
     return true;
})


