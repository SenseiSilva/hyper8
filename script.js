
// this is a function for the nav bar when getting to less than 900 px in viewport width //
// this function gets the id myTopnav and hides all the smaller classes in it and replaces them with the one button //
// it does this by adding the responsive class in line 9 which hides the html lines and puts the display into block to have them organised differently //

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


// this plays the revving of the engine by getting the id connected to the audio element in the html//
function play1(){
    document.getElementById("bugatti").play();
}

// this plays the revving of the engine by getting the id connected to the audio element in the html//
function play2(){
    document.getElementById("ferrari").play();
}

// this plays the revving of the engine by getting the id connected to the audio element in the html//
function play3(){
    document.getElementById("lamborghini").play();
}

// this plays the revving of the engine by getting the id connected to the audio element in the html//
function play4(){
    document.getElementById("koenigsegg").play();
}

// this plays the revving of the engine by getting the id connected to the audio element in the html//
function play5(){
    document.getElementById("mercedes").play();
}

// this plays the revving of the engine by getting the id connected to the audio element in the html//
function play6(){
    document.getElementById("mclaren").play();
}

// this plays the revving of the engine by getting the id connected to the audio element in the html//
function play7(){
    document.getElementById("porsche").play();
}
