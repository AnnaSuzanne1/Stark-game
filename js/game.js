// timer from https://codepen.io/masudrana2779/pen/GRqzPdZ
var timerId;

function countdown() {
    var seconds = 15;
    function tick() {
        var counter = document.getElementById("counter");
        seconds--;
        counter.innerHTML =
            "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0) {
            timerId = setTimeout(tick, 1000);
        } else {
            document.getElementById("verifiBtn").innerHTML = `
        `;
            document.getElementById("counter").innerHTML = "";
        }

        // try again button
        function getbuttonagain() {
            if (seconds < 1) {
                audioArray[1].play();
                document.getElementById("again").style.display = "block";
            }
        }

        // sterren
        function changeImage2() {
            if (seconds < 10) {
                document.getElementById("sterren3").style.display = "none";
                document.getElementById("sterren2").style.display = "block";
                document.getElementById("ster1").style.display = "none";
            }
        }

        function changeImage1() {
            if (seconds < 5) {
                document.getElementById("sterren3").style.display = "none";
                document.getElementById("sterren2").style.display = "none";
                document.getElementById("ster1").style.display = "block";
            }
        }

        function changeImage0() {
            if (seconds < 1) {
                document.getElementById("sterren3").style.display = "none";
                document.getElementById("sterren2").style.display = "none";
                document.getElementById("ster1").style.display = "none";
            }
        }
        
        changeImage2();
        changeImage1();
        changeImage0();
        getbuttonagain()
    }
    tick();
}
countdown();

// audio
var audioArray = [];
audioArray[0] = new Audio('audio/success-1-6297.mp3');
audioArray[1] = new Audio('audio/game-over-arcade-6435.mp3');
audioArray[2] = new Audio('audio/click-21156.mp3');

// op afbeeldingen klikken
var clickedCount = 0;

function showButtonIfAllClicked() {
    if (clickedCount === 4) {
        clearTimeout(timerId);
        document.getElementById("next").style.display = "block";
        document.getElementById("welldone").style.display = "block";
        audioArray[0].play();
    }
}

function firstClick() {
    clickedCount++;
    document.getElementById("tekst1").style.backgroundColor = "green";
    document.getElementById("tekst1").style.color = "white";
    document.querySelector(".image1").style.display = "none";
    showButtonIfAllClicked();
    audioArray[2].play();
}

function secondClick() {
    clickedCount++;
    document.getElementById("tekst2").style.backgroundColor = "green";
    document.getElementById("tekst2").style.color = "white";
    document.querySelector(".image2").style.display = "none";
    showButtonIfAllClicked();
    audioArray[2].play();
}

function thirdClick() {
    clickedCount++;
    document.getElementById("tekst3").style.backgroundColor = "green";
    document.getElementById("tekst3").style.color = "white";
    document.querySelector(".image3").style.display = "none";
    showButtonIfAllClicked();
    audioArray[2].play();
}

function fourthClick() {
    clickedCount++;
    document.getElementById("tekst4").style.backgroundColor = "green";
    document.getElementById("tekst4").style.color = "white";
    document.querySelector(".image4").style.display = "none";
    showButtonIfAllClicked();
    audioArray[2].play();
}

