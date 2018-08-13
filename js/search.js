//Create content filtering search functionality

  //listen for user input in search box

  //onkeyup change user input text to lower case

  //loop through all image captions in real time and compare with user input

  //display photos in gallery if there is a text match



document.getElementById("input-field").addEventListener("keyup", compareCase);

function compareCase() {
    Let input = document.getElementById("input-field");
    input.value = input.value.toLowerCase();
}
