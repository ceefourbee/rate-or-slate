$(function () {
  // bung the current version of jQuery in the console
  console.log($().jquery);
});

function viewportWidthCheck() {
    var viewportWidth = document.documentElement.clientWidth
    //alert(viewportWidth);
    
    var coverWidth = viewportWidth / 3;
    return coverWidth;
}

function setAlbumCoverSize() {
    for (var i = 0; i < albumCoverClass.length; ++i) {
        albumCoverClass[i].style.width = viewportWidthCheck() + "px";
        albumCoverClass[i].style.height = viewportWidthCheck() + "px";
    }
}

var albumCoverClass = document.getElementsByClassName("album-cover");

// Setting a timer and polling for the screen size every 500ms seems smoother
setInterval(setAlbumCoverSize, 500);

//setAlbumCoverSize();
//window.onresize = setAlbumCoverSize;