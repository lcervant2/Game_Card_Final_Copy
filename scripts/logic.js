    var clicks = 0; //counts how may picks have been made in each turn
    var firstchoice; //stores index of first card selected
    var secondchoice; //stores index of second card selected

    var match = 0; //counts matches made
    var backcard = "images/back.png"; //shows back of card when turned over

    var faces = []; //array to store card images
    faces[0] = 'images/king_of_diamonds.png';
    faces[1] = 'images/king_of_hearts.png';
    faces[2] = 'images/queen_of_diamonds.png';
    faces[3] = 'images/queen_of_hearts.png';

    function choose(card) {
            if (clicks == 2) {
                return;
            }
            if (clicks == 0) {
                firstchoice = card;
                document.images[card].src = faces[card];
                clicks = 1;
            } else {
                clicks = 2;
                secondchoice = card;
                document.images[card].src = faces[card];
                timer = setInterval("check()", 1000);
            }
        }
        /* Check to see if a match is made */

    function check() {
    clearInterval(timer); //stop timer
    clicks = 0;
    if (faces[secondchoice] == faces[firstchoice]) {
        match++;
        document.getElementById("matches").innerHTML = match;
    } else {
        document.images[firstchoice].src = backcard;
        document.images[secondchoice].src = backcard;
        return;
    }
}