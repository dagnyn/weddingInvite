window.addEventListener('load', responsive);
window.addEventListener('resize', responsive);

function responsive() {
    const width = window.innerWidth;
    const thresh = 700;
    
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
}