//alternatively for a non-JS approach: Set the animation and offset for each child manually.

delay = 0.1;
duration = $("#scroll .item").length * delay;

$("#scroll .item").each(function(n) {
  $(this).css("transform", "translateY(-"+(n*100)+"%)");
  $(this).css("animation", "scrollanim "+duration+"s linear -"+(delay*n)+"s infinite");
});