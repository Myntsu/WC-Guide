// Enabling popover
const popoverTriggerList = document.querySelectorAll('[data-bs-slideToggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


// Enabling tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-slideToggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// ===== Document ready =====
$(document).ready(function() {

  // ===== Scroll to Top =====
  
  const backToTopButton = document.querySelector("#btn-back-to-top");

  const scrollContainer = () => {
    return document.documentElement || document.body;
  };

  const goToTop = () => {
    document.body.scrollIntoView({
      behavior: "smooth"
    });
  };

  backToTopButton.addEventListener("click", goToTop);

  //Get the button
  mybutton = document.getElementById("btn-back-to-top");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  // Display and hide
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
});

$(function() {
  $(".clickable").click( function() {
    $(this).toggleClass("container-switch");
  } );
} );

$("li").click(function() {
  $(this).toggleClass('stroked');
});

$(".hide-one").click(function(){
  $(".first-dish").slideToggle(1000);
});

$(".hide-two").click(function(){
  $(".second-dish").slideToggle(1000);
});

$(".hide-three").click(function(){
  $(".third-dish").slideToggle(1000);
});

$(".hide-four").click(function(){
  $(".fourth-dish").slideToggle(1000);
});

$(".hide-five").click(function(){
  $(".fifth-dish").slideToggle(1000);
});

$(".hide-six").click(function(){
  $(".sixth-dish").slideToggle(1000);
});

$(".hide-seven").click(function(){
  $(".seventh-dish").slideToggle(1000);
});

$(".hide-eight").click(function(){
  $(".eight-dish").slideToggle(1000);
});

$(".hide-nine").click(function(){
  $(".nine-dish").slideToggle(1000);
});

$(".hide-ten").click(function(){
  $(".tenth-dish").slideToggle(1000);
});

$(".hide-eleven").click(function(){
  $(".eleven-dish").slideToggle(1000);
});

$(".hide-twelve").click(function(){
  $(".twelve-dish").slideToggle(1000);
});