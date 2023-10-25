

function createParagraph() {
    console.log("create paragraph has been logged")
    var wordOne = document.getElementById("textOne").value;
    var wordTwo = document.getElementById("textTwo").value;
    var wordThree = document.getElementById("textThree").value;
    var wordFour = document.getElementById("textFour").value;
    var wordFive = document.getElementById("textFive").value;
    var wordSix = document.getElementById("textSix").value;
    var wordSeven = document.getElementById("textSeven").value;
    var wordEight = document.getElementById("textEight").value;
    var wordNine = document.getElementById("textNine").value;
    var wordTen = document.getElementById("textTen").value;

 

    console.log(wordOne,wordTwo,wordThree,wordFour,wordFive,wordSix,wordSeven,wordEight)

    var paragraph = "<p> come out to " + wordOne + " ." + "  WITCHES " + wordTwo + "." + "  with big  and  shoes make potions and very SPOOKY brews " + wordThree + "." + "VAMPIRES with and long red capes visit with friends and search for neck napes. " + wordFour + "  OGRES and GHOSTS sometimes  and play, " + wordFive + ". " + " on this , October Day. " + wordSix + "  All the TRICK-OR-TREATERS  and " + wordSeven +" hunter for  and scare, dressed up as princesses and cowboys  and there.  " + wordEight + " Have a  HALLWEEN IN 2023!</p>"


    document.getElementById("answer").innerHTML = paragraph;

    console.log(paragraph);
  

}