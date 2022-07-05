let drums = document.querySelectorAll(".drum").length;
for(var i=0;i<drums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var ButtonPressed = this.innerHTML;
        animationCall(ButtonPressed);
        playSound(ButtonPressed);
    });
}

document.addEventListener("keypress",function(event){
    var ButtonPressed = event.key;
    animationCall(ButtonPressed);
    playSound(ButtonPressed);
});

function playSound(c){
    switch(c){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            console.log("Oops!!!");
    }
}

function animationCall(b){
    document.querySelector("."+b).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+b).classList.remove("pressed");
    },100);
}