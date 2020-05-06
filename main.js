function myFunction() {
  var x = document.getElementById("myLinks");
  var y= document.getElementById("hero");

  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.marginTop="10%";

  } else {
    x.style.display = "block";
    y.style.margin="0";

  }
}
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
