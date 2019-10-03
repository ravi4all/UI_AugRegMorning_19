window.addEventListener("load", initEvent);

var audio;

function initEvent() {
    audio = document.querySelector("#audio");
    showSongs();
    loadPlayList();
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
        img.setAttribute('title', songsList[i].song_id);
        btn.innerHTML = "Add to playlist";
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(btn);
        ul.appendChild(li);
        btn.addEventListener("click", addToPlaylist);
        img.addEventListener("click", playSong);
    }
}

function playSong() {
    var song_id = event.srcElement.title;
    for (var i = 0; i < songsList.length; i++) {
        if (songsList[i].song_id == song_id) {
            var song_url = songsList[i].song_url;
            break
        }
    }
    audio.src = song_url;
    audio.play();
}

function addToPlaylist() {
    var song_id = event.srcElement.parentElement.children[0].title;
    for (var i = 0; i < songsList.length; i++) {
        if (songsList[i].song_id == song_id) {
            object.addSong(songsList[i].song_id, songsList[i].song_name, songsList[i].song_url, songsList[i].song_thumb);
            break
        }
    }
    showPlayList();
    savePlayList();
}

function showPlayList() {
    var ul = document.querySelector("#playList");
    ul.innerHTML = "";
    for (var i = 0; i < object.playList.length; i++) {
        var li = document.createElement("li");
        var div = document.createElement("div");
        var span = document.createElement("span");
        var img = document.createElement("img");
        img.className = "w-100";
        var btn = document.createElement("button");
        btn.className = "btn btn-primary";
        span.innerHTML = object.playList[i].name;
        img.setAttribute('src', object.playList[i].image);
        span.setAttribute('title', object.playList[i].id);
        img.setAttribute('title', object.playList[i].id);
        btn.innerHTML = "Delete";
        div.appendChild(img);
        div.appendChild(span);
        li.appendChild(div);
        li.appendChild(btn);
        ul.appendChild(li);
        img.addEventListener("click", playSong);
        span.addEventListener("click", playSong);
        btn.addEventListener("click", deleteSong);
    }
}

function deleteSong() {
    var song_id = event.srcElement.parentElement.children[0].children[0].title;
    console.log(song_id);
    object.deleteSong(parseInt(song_id));
    showPlayList();
    savePlayList();
}

function savePlayList() {
    if (window.localStorage) {
        var json = JSON.stringify(object.playList);
        localStorage.setItem('playList', json);
    }
}

function loadPlayList() {
    if (localStorage.playList) {
        var playList = localStorage.getItem("playList");
        object.playList = JSON.parse(playList);
        showPlayList();
    }
}