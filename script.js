let myImage = new Image(1000, 1000);
myImage.src = 'fixedcat.jpg';
document.body.appendChild(myImage);
  let itemsaved = -1 

let clicks = 0
myImage.addEventListener("click", function () {
  if (clicks == 0) {
    myImage.src = 'animatedcat.gif'
  clicks++
  } 
    
  const responses = []
  responses[0] = "Yes";
  responses[1] = "No";
  responses[2] = "Maybe";
  responses[3] = "Ask again later";
  responses[4] = "Feed Me"
  responses[5] = "What does that say about you?"
  responses[6] = "Why should I care?"
  responses[7] = "*snores*"
  responses[8] = "Don't be Emo"
  responses[9] = "Do it" 
  responses[10] = "You ate"
  responses[11] = "Absolutely not"
  responses[12] = "Go eat" 
  responses[13] = "Chill out"
  responses[14] = "Do it no balls"
  responses[15] = "Go to sleep"
  responses[16] = "Meow"
    let item = responses[Math.floor(Math.random()*responses.length)];

  while (true) { 
    if (item == itemsaved) {
  item = responses[Math.floor(Math.random()*responses.length)];
      console.log("Duplicate")
  }  else {
     document.getElementById("text").innerHTML = item
      itemsaved = item
      break;
  }
              
  
}})
