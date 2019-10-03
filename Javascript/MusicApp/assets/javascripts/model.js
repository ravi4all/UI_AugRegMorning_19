// Function as a constructor
function Song(id, name, url, image) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.image = image;
    this.selected = false;
}

// class Song {
//     constructor(id, name, url, image) {
//         this.id = id;
//         this.name = name;
//         this.url = url;
//         this.image = image;
//     }
// }

var object = {
    playList: [],
    addSong: function(id, name, url, image) {
        var song = new Song(id, name, url, image);
        this.playList.push(song);
        // console.log(this.playList);
    },
    deleteSong: function(id) {
        var songObj = this.playList.filter(function(obj) {
            return obj.id == id;
        });
        // console.log(songObj);
        songObj[0].selected = true;

        this.playList = this.playList.filter(function(obj) {
            return obj.selected == false;
        })

    }
}