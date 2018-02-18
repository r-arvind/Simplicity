window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("topbar").style.top = "0";
  } else {
    document.getElementById("topbar").style.top = "-100px";
  }
} 