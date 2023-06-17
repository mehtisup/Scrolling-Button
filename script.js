window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("sButton").style.display = "block";
    } else {
        document.getElementById("sButton").style.display = "none";
    }
}

function sFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
