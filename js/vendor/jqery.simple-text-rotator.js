!function ($) {

  var defaults = {
    animation: "dissolve",
    speed: 2000
  };

  $.fx.step.textShadowBlur = function (fx) {
    $(fx.elem).prop('textShadowBlur', fx.now).css({ textShadow: '0 0 ' + Math.floor(fx.now) + 'px black' });
  };

  $.fn.textrotator = function(options) {
    var settings = $.extend({}, defaults, options);

    return this.each(function() {
      var parent = $(this);
      var array = [];
      $.each(parent.children(), function (key, child) {
        array.push($(child).text());
      });
      parent.text(array[0]);

      // animation option
      var rotate = function() {
        switch (settings.animation) {
        case 'dissolve':
          parent.animate({
            textShadowBlur: 20,
            opacity: 0
          }, 500, function() {
            index = $.inArray(parent.text(), array);
            if ((index + 1) == array.length) index = -1;
            parent.text(array[index + 1]).animate({
              textShadowBlur: 0,
              opacity: 1
            }, 500);
          });
          break;

        case 'flip':
          if (parent.find(".back").length > 0) {
            parent.html(parent.find(".back").html());
          }

          var initial = parent.text();
          var index = $.inArray(initial, array);
          if ((index + 1) == array.length) index = -1;

          parent.html("");
          $("<span class='front'>" + initial + "</span>").appendTo(parent);
          $("<span class='back'>" + array[index + 1] + "</span>").appendTo(parent);
          parent.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip").show().css({
            "-webkit-transform": " rotateY(-180deg)",
            "-moz-transform": " rotateY(-180deg)",
            "-o-transform": " rotateY(-180deg)",
            "transform": " rotateY(-180deg)"
          })

          break;

        case 'flipUp':
          if (parent.find(".back").length > 0) {
            parent.html(parent.find(".back").html());
          }

          var initial = parent.text();
          var index = $.inArray(initial, array);
          if ((index + 1) == array.length) index = -1;

          parent.html("");
          $("<span class='front'>" + initial + "</span>").appendTo(parent);
          $("<span class='back'>" + array[index + 1] + "</span>").appendTo(parent);
          parent.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip up").show().css({
            "-webkit-transform": " rotateX(-180deg)",
            "-moz-transform": " rotateX(-180deg)",
            "-o-transform": " rotateX(-180deg)",
            "transform": " rotateX(-180deg)"
          })

          break;

        case 'flipCube':
          if (parent.find(".back").length > 0) {
            parent.html(parent.find(".back").html());
          }

          var initial = parent.text();
          var index = $.inArray(initial, array);
          if ((index + 1) == array.length) index = -1;

          parent.html("");
          $("<span class='front'>" + initial + "</span>").appendTo(parent);
          $("<span class='back'>" + array[index + 1] + "</span>").appendTo(parent);
          parent.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube").show().css({
            "-webkit-transform": " rotateY(180deg)",
            "-moz-transform": " rotateY(180deg)",
            "-o-transform": " rotateY(180deg)",
            "transform": " rotateY(180deg)"
          });

          break;

        case 'flipCubeUp':
          if (parent.find(".back").length > 0) {
            parent.html(parent.find(".back").html());
          }

          var initial = parent.text();
          var index = $.inArray(initial, array);
          if ((index + 1) == array.length) index = -1;

          parent.html("");
          $("<span class='front'>" + initial + "</span>").appendTo(parent);
          $("<span class='back'>" + array[index + 1] + "</span>").appendTo(parent);
          parent.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube up").show().css({
            "-webkit-transform": " rotateX(180deg)",
            "-moz-transform": " rotateX(180deg)",
            "-o-transform": " rotateX(180deg)",
            "transform": " rotateX(180deg)"
          })

          break;

        case 'spin':
          if (parent.find(".rotating").length > 0) {
            parent.html(parent.find(".rotating").html());
          }
          index = $.inArray(parent.text(), array);
          if ((index + 1) == array.length) index = -1;

          parent.wrapInner("<span class='rotating spin' />").find(".rotating").hide().text(array[index + 1]).show().css({
            "-webkit-transform": " rotate(0) scale(1)",
            "-moz-transform": "rotate(0) scale(1)",
            "-o-transform": "rotate(0) scale(1)",
            "transform": "rotate(0) scale(1)"
          })
          break;

        case 'fade':
          parent.fadeOut(settings.speed, function() {
            index = $.inArray(parent.text(), array);
            if ((index + 1) == array.length) index = -1;
            parent.text(array[index + 1]).fadeIn(settings.speed);
          });
          break;
        }
      };
      setInterval(rotate, settings.speed);
    });
  };

}(window.jQuery);

$(function() {
  $('.rotate').textrotator({ animation: 'spin', speed: 5000 });
});