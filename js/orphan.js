var first = document.querySelector("h1 span:first-child");
var last = document.querySelector("h1 span:last-child");

function closer() {
first.classList.add("closer");
last.classList.add("closer");
first.innerHTML = "@"
last.innerHTML = "mymac"
}
timeoutID = window.setTimeout(closer, 6000);
// bring on the Web Animations API: this is a very hacky way of saying "when the first scroller animation ends, switch out the content of the span elements and add classes to them. "