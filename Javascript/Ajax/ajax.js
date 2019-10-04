window.addEventListener("load", initEvent);

function initEvent() {
    document.querySelector("#btn").addEventListener("click", show);
}

function show() {
    one();
    two();
    three();
    four();
    five();
}

function one() {
    console.log("Function One Called...");
}

function two() {
    console.log("Function Two Called...");
}

function three() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        console.log(this.readyState, this.status);
        if (this.readyState == 4 && this.status == 200) {
            for (var i = 0; i < 100000; i++) {
                for (var j = 0; j < 100000; j++) {
                    k = i + j;
                }
            }
            console.log("Iterations Completed");
            console.log("Function Three Called...");
        }
    }

    xhttp.open('get', '');
    xhttp.send();
}

function four() {
    console.log("Function Four Called...");
}

function five() {
    console.log("Function Five Called...");
}