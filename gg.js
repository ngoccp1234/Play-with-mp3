var myMusic = document.getElementsByClassName('mp3');
var music = document.getElementById('mymp3');
function doSomething() {
    music.src = ' https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
    myMusic.style.display = 'block';
}