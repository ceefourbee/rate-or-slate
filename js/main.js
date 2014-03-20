$(function () {
  // bung the current version of jQuery in the console
  console.log($().jquery);
  
  //$('#show-search').on('click', function (e) {
    //e.preventDefault();
    //$('.full-container').toggleClass('push-menu--open');    
  //});
  
  var pushContent = $('.push-content'),
      pushMenu = $('.push-menu');
  
  $(document).keydown(function(e) {
    if(e.ctrlKey && (e.which == 77)) {
      e.preventDefault();
      pushContent.toggleClass('open closed');
      pushMenu.toggleClass('closed open');
      setTimeout(function() {
        if ($(pushMenu).hasClass('open')) {
          $('#track-search').focus();
        }
      }, 200);
      return false;
    }
    return true;
  });
  
});



function viewportWidthCheck() {
    var viewportWidth = document.documentElement.clientWidth,
        coversPerRow = 5;
    
    if (viewportWidth <= "500") {
      coversPerRow = 1;
    }
    else if (viewportWidth >= "501" && viewportWidth <= "850") {
      coversPerRow = 2;
    }
    else if (viewportWidth >= "851" && viewportWidth <= "1200") {
      coversPerRow = 3;
    } 
    else {
      coversPerRow = 4;  
    }
    
    var coverWidth = viewportWidth / coversPerRow;
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