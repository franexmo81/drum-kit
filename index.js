// Click detection
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        playSound(this.innerHTML);
        animateButton(this.innerHTML);
    });
}

// Keyboard detection
document.addEventListener("keydown", function (e) {
    playSound(e.key);
    animateButton(e.key);
});

// Play sound
function playSound (key) {
    switch (key) {
        case "a": var sound = new Audio('sounds/tom-1.mp3');
            break;

        case "s": var sound = new Audio('sounds/tom-2.mp3');
            break;

        case "d": var sound = new Audio('sounds/tom-3.mp3');
            break;

        case "f": var sound = new Audio('sounds/tom-4.mp3');
            break;

        case "j": var sound = new Audio('sounds/snare.mp3');
            break;

        case "k": var sound = new Audio('sounds/crash.mp3');
            break;

        case "l": var sound = new Audio('sounds/kick.mp3');
            break;

        default:
        
            break;
    }
    sound.play();
}

// Button animation
function animateButton (key) {
    
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("."+key).classList.remove("pressed");
    }, 100);
    
}





