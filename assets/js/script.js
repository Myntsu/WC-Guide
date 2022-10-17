// Enabling popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


// Enabling tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
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

$(".btn-hide").click(function() {
  $(this).hide();
});

$(".hide-one").click(function(){
  $(".first-dish").toggle();
});

$(".hide-two").click(function(){
  $(".second-dish").toggle();
});

$(".hide-three").click(function(){
  $(".third-dish").toggle();
});

$(".hide-four").click(function(){
  $(".fourth-dish").toggle();
});

$(".hide-five").click(function(){
  $(".fifth-dish").toggle();
});

$(".hide-six").click(function(){
  $(".sixth-dish").toggle();
});

$(".hide-seven").click(function(){
  $(".seventh-dish").toggle();
});

$(".hide-eight").click(function(){
  $(".eight-dish").toggle();
});

$(".hide-nine").click(function(){
  $(".nine-dish").toggle();
});

$(".hide-ten").click(function(){
  $(".tenth-dish").toggle();
});

$(".hide-eleven").click(function(){
  $(".eleven-dish").toggle();
});

$(".hide-twelve").click(function(){
  $(".twelve-dish").toggle();
});
