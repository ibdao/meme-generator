function createMeme(){
    const newMeme = document.createElement("div"); //creates a div or "container" to hold image and text
    newMeme.classList.add("newMeme");
    newMeme.id = "container"
    
    const img = document.createElement("img"); //creates image
    img.src = document.getElementById("url").value;
  
    const topText = document.createElement("p"); //creates top text
    topText.id = "top"
    const top = document.getElementById("topText").value;
    topText.innerText = top;
    topText.style.fontSize = "45px"
  
    const bottomText = document.createElement("p"); //creates bottom text
    bottomText.id = "bottom"
    const bottom = document.getElementById("bottomText").value;
    bottomText.innerText = bottom;
    bottomText.style.fontSize = "45px"
  
  
    newMeme.append(img, topText, bottomText) //attaches the image and text to the container
    
    document.querySelector("#photos").append(newMeme);
  
  }
  const element = document.getElementById("myBtn"); // Three events for one button... 
  element.addEventListener("click", function(e){ //Prevents form from refreshing
      e.preventDefault();
  });
  element.addEventListener("click", createMeme);// creates the meme to the apge
  element.addEventListener("click", function(){ //resets the form fields
      document.getElementById("memePieces").reset();
  });

  const photos = document.getElementById("photos"); //removes the meme from the page. 
    photos.addEventListener("click", function(e){
        e.target.parentElement.remove();
    });

