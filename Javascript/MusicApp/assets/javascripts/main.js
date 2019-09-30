window.addEventListener("load", initEvent);

var audio;

function initEvent() {
    showSongs();
}

function showSongs() {
    var ul = document.querySelector("#songsList");
    for (var i = 0; i < songsList.length; i++) {
        var li = document.createElement("li");
        var span = document.createElement("span");
        var img = document.createElement("img");
        img.className = "w-100";
        var btn = document.createElement("button");
        btn.className = "btn btn-primary w-100 d-block";
        span.innerHTML = songsList[i].song_name;
        img.setAttribute('src', songsList[i].song_thumb);
        btn.innerHTML = "Add to playlist";
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(btn);
        ul.appendChild(li);
    }
}