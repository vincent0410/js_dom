//* exo 1 
let footerCounter = 0;
document.getElementsByTagName("footer")[0].addEventListener("click", function(){
  footerCounter++;
  console.log(`Click number ${footerCounter}`);
});



//* exo 3
let firstCard = document.getElementsByClassName("card-body")[0];
firstCard.getElementsByTagName("button")[1].addEventListener("click", function(){
  firstCard.getElementsByTagName("p")[0].classList.add("text-danger");
});

//* exo 4
let secondCard = document.getElementsByClassName("card-body")[1];
secondCard.getElementsByTagName("button")[1].addEventListener("click", function(){
  secondCard.getElementsByTagName("p")[0].classList.toggle("text-success");
});


//* exo 5
document.getElementsByClassName("navbar")[0].addEventListener("click", function(){
  if (document.getElementsByTagName("link")[0].rel == "stylesheet")           
    document.getElementsByTagName("link")[0].rel = "styleDisabled";
  else
    document.getElementsByTagName("link")[0].rel = "stylesheet";
});


//* exo 6
let viewButtons = document.getElementsByClassName("btn btn-sm btn-success");
for (let i = 0; i < viewButtons.length; i++){
  viewButtons[i].addEventListener("mouseover" , function(){
    document.getElementsByClassName("card-text")[i].classList.toggle("d-none");
    document.getElementsByClassName("card-img-top")[i].classList.toggle("w-25");
  });
};