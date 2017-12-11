
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
