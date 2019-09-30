// window.addEventListener("load", function() {
//     document.getElementById("btn").addEventListener("click", greet);
// })

window.addEventListener("load", initEvent);

function initEvent() {
    document.getElementById("btn").addEventListener("click", greet);
}

function greet() {
    var box = document.getElementById("box_1");
    document.getElementById("result").innerHTML = box.value;
}