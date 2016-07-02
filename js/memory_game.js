/**
 * Created by itc_user on 6/30/2016.
 */


var gameIsPaused = false;
//shuffling my cards
    var picturesArr = ["./Pics/1.jpg", "./Pics/2.jpg", "./Pics/3.jpg", "./Pics/4.jpg", "./Pics/5.jpg", "./Pics/6.jpg"];
    var picturesArrMatch = picturesArr;
    var allPics = picturesArr.concat(picturesArrMatch);

    function shufflePics(allPics) {
        for (var i = allPics.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tempPic = allPics[i];
            allPics[i] = allPics[j];
            allPics[j] = tempPic;
        }
        return allPics;

    }
    shufflePics(allPics);

//creating my cards
function createCards(allPics) {
    var board = document.getElementById("game");
    for (var i = 0; i < allPics.length; i++) {
        var card = document.createElement("div");
        card.className ="cardModel noMatch";
        card.addEventListener("click",clickCard);
        card.setAttribute("data-img",allPics[i] );
        board.appendChild(card);
    }
}
createCards(allPics);

//user interaction
// when user clicks in the div, the div on which the event happened should change its background img
function clickCard(e) {
    if (!gameIsPaused){
        var clickedCard = e.target;
        clickedCard.style.backgroundImage = "url('" + clickedCard.getAttribute("data-img") + "')";

        var firstCard = document.getElementById("clicked");
        //This is the first card
        if (firstCard == null) {
            clickedCard.id = "clicked";
        } else {
            firstCard.id = "";
            if (clickedCard.getAttribute("data-img") === firstCard.getAttribute("data-img")) {
                clickedCard.className = "cardModel";
                firstCard.className = "cardModel";
                if (document.getElementsByClassName("noMatch").length == 0) {
                    document.getElementById("youWon").style.display = "block";
                }

            }else {
                gameIsPaused = true;
                    setTimeout(function () {
                        clickedCard.style.backgroundImage = "url('./Pics/texture.jpg')";
                        firstCard.style.backgroundImage = "url('./Pics/texture.jpg')";
                        gameIsPaused = false;
                    }, 1000)
                }
            }
    }
}






//when user clicks in the second div if not equal to the first clicked div both divs should turn backs again and hid the i
