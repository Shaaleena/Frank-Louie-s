
function myFunction() {
  var x = document.getElementById("myLinks");
  var y= document.getElementById("hero");
  var fr1=document.getElementById("frnote");
  if (x.className === "topnav") {
    x.className += " responsive";
    fr1.style.display="none";
  } else {
    x.className = "topnav";
    fr1.style.display="block";
  }
}

  var modal = document.getElementById("myModal");

// Get the button that opens the modal


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal

window.onload = function() {
  setTimeout(function(){
  modal.style.display = "block";
}, 2000);
  modal.className +=" fade-in";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//  if (x.style.display === "block") {
//    x.style.display = "none";
//    y.style.marginTop="15%";

//  } else {
//    x.style.display = "block";
//    y.style.marginTop="0";

//  }

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
