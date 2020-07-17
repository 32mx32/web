//Populate coded line with symbols
var codedLines = $('.line-code__top, .line-code__bott');
codedLines.each(function() {
  var el = $(this);
  var count = 100;
  var line = $();
  var text;
  var i = 0;

  setTimeout(function() {
    for (i = 0; i < count; i++) {
      text = '<div class="letter-col"></div>';
      text = $(text)
        .css('animation-duration', randomRange(2, 4) + 's')
        .append(
          '<span>' + Math.random().toString(2).substr(2, 1) + '</span>' +
          '<span>' + Math.random().toString(2).substr(2, 1) + '</span>' +
          '<span>' + Math.random().toString(2).substr(2, 1) + '</span>' +
          '<span>' + Math.random().toString(2).substr(2, 1) + '</span>'
        );
      line = line.add(text);
    }
    el.append(line);
  }, 100);
});

function randomRange(min, max) {
  return (min + ((max - min) * Math.random())).toFixed(4);
};