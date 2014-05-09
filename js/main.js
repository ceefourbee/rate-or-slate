$(function () {
  // bung the current version of jQuery in the console
  console.log($().jquery);

  var pushContent = $('.push-content'),
      pushMenu = $('.push-menu');
      
  function togglePages() {
    pushContent.toggleClass('open closed');
    pushMenu.toggleClass('closed open');
    setTimeout(function () {
      if ($(pushMenu).hasClass('open')) {
        $('#track-search').focus();
      }
    }, 200);
    return false;  
  }
      
  $('#show-search').on('click', function (e) {
    e.preventDefault();
    togglePages();
  });

  $(document).keydown(function (e) {
    if (e.ctrlKey && (e.which == 77)) {
      e.preventDefault();
      togglePages();
    }
    return true;
  });

});


var howManyTimesAmICalled = 0;
function getCorrectCoverWidth() {
  var viewportWidth = document.documentElement.clientWidth;
  console.log("Viewport width: " + viewportWidth + " (" + howManyTimesAmICalled++ + ")");

  var coversPerRow;

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

var albumCoverClass = document.getElementsByClassName("album-cover");

// Setting a timer and polling for the screen size every 500ms seems smoother
var albumCoverSizeInterval;
function toggleResizing() {
  if (albumCoverSizeInterval) {
    clearInterval(albumCoverSizeInterval);
    albumCoverSizeInterval = null;
  } else {
    albumCoverSizeInterval = setInterval(setAlbumCoverSize, 500);
  }
}
function setAlbumCoverSize() {
  var correctCoverWidth = getCorrectCoverWidth();
  for (var i = 0; i < albumCoverClass.length; ++i) {
    albumCoverClass[i].style.width = correctCoverWidth + "px";
    albumCoverClass[i].style.height = correctCoverWidth + "px";
  }
}
toggleResizing();