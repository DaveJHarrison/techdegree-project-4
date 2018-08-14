//Create content filtering search functionality

//create variable select and store all anchor elements
let anchor = document.querySelectorAll('a');

//listen for user input in search box
//onkeyup change user input text to lower case
function compareCase() {
  let input = document.getElementById("input-field");
  input.value = input.value.toLowerCase();
}

//loop through all image captions in real time and compare with user input
for (let i = 0; i < anchor.length; i += 1) {
  //create variable to search all images by data-title attribute
  let caption = anchor[i].getAttribute('data-title').toLowerCase();
  //compare text in attribute vs user input
  if (document.getElementById("input-field").addEventListener("keyup", compareCase) === caption.filter() {
    //display photos in gallery if there is a text match else don't display
    anchor[i].style.display = "";
  } else {
    anchor[i].style.display = "none";
  }
}
