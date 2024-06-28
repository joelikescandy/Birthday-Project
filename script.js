let myImage = new Image(1000, 1000);
myImage.src = 'fixedcat.jpg';
document.body.appendChild(myImage);

let clicks = 0
myImage.addEventListener("click", function () {
  if (clicks == 0) {
    myImage.src = 'animatedcat.gif'
  } 
  clicks++ 
  
  const responses = []
  responses[0] = "Yes";
  responses[1] = "No";
  responses[2] = "Maybe";
  responses[3] = "Ask again later";
  responses[4] = "Feed Me"
  responses[5] = "What does that mean about you?"
  responses[6] = "Why should I care?"
  responses[7] = "*snores*"

  let item = responses[Math.floor(Math.random()*responses.length)];


  document.getElementById("text").innerHTML = item
  
})
