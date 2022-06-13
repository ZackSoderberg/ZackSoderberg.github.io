function countdownTimer() {
    var currTime = 10;
    var i = 1;
    while (i < 12) {
        if (i == 11) {
            //Code for writing 'blast off' at zero
            setTimeout(function () {
                document.getElementById("launchCountdown").innerHTML = 
"Blastoff!!!";
            }, 1000 * i);
        } else if (i > 6) {
            //code for writing a warning once countdown is over half done
            setTimeout(function () {
                document.getElementById("launchCountdown").innerHTML =
                    "Warning: Less than half way to launch! Time left: " + 
currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            //code for the first half of the countdown
            setTimeout(function () {
                document.getElementById("launchCountdown").innerHTML = "Time left " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
        i = i + 1;
    }
}