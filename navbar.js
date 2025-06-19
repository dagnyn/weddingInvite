window.addEventListener('load', responsive);
window.addEventListener('resize', responsive);

function responsive() {
    const width = window.innerWidth;
    const thresh = 1200;
    const ceremonyThresh = 500;
    
    if (width < thresh) {
        document.getElementsByClassName("navHeader")[0].style.display = "none";
        document.getElementsByClassName("header")[0].style.display = "flex";

        if (document.getElementsByClassName("parent-line-side").length > 0) {
            document.getElementsByClassName("parent-line-side")[0].style.display = "none";
            document.getElementsByClassName("parent-line-stacked")[0].style.display = "inline";
        }
    }
    else {
        document.getElementsByClassName("navHeader")[0].style.display = "flex";
        document.getElementsByClassName("header")[0].style.display = "none";

        if (document.getElementsByClassName("parent-line-side").length > 0) {
            document.getElementsByClassName("parent-line-stacked")[0].style.display = "none";
            document.getElementsByClassName("parent-line-side")[0].style.display = "flex";
    
        }
    }

    if (document.getElementById("church")) {
        console.log(width)
        if (width < ceremonyThresh) {
            // Change the church text
            document.getElementById("church").style.display = "none";
            document.getElementById("church-stacked").style.display = "block";

            // Change the dresscode text
            document.getElementById("church-attire").style.display = "none";
            document.getElementById("church-attire-stacked").style.display = "block";
        }

        else {
            document.getElementById("church").style.display = "block";
            document.getElementById("church-stacked").style.display = "none";

            document.getElementById("church-attire").style.display = "block";
            document.getElementById("church-attire-stacked").style.display = "none";
        }
    }
    
}