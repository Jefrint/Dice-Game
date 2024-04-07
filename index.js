var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;
randomdice1="./images/dice"+randomnumber1+".png"
document.querySelectorAll("img")[0].setAttribute("src",randomdice1);

randomdice2="./images/dice"+randomnumber2+".png"
document.querySelectorAll("img")[1].setAttribute("src",randomdice2);


if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Play 1 Wins!";
}
else if (randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Play 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="DRAW!";   
}