// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 2px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Comment box on product gallery page
let post= document.getElementById("post");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("commentList").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
 
});


/*Like button on product page*/
function likeButton(x) {
  x.classList.toggle("likeHeart likeHeart beats");
}

//Read more (show/hide function)
function toggler(pageContent) {
  $("#" + pageContent).toggle();
}

/*Dropdown menu selection on contact-us page:
When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("dropdownMenu").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.subscribeBtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//Using jquery creating chain effects 
$(document).ready(function(){
  $("#changeBtn").click(function(){
    $("#banner-text").css("color", "darkgreen").slideUp(2000).slideDown(2000);
  });
});