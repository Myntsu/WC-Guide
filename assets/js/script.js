// Enabling popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


// Enabling tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// // Observer function
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry)
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show')
//     }
//   });
// });

// const hiddenElements = document.querySelectorAll('.hidden, .blurred, .scaled, .translated, .translated-right');
// hiddenElements.forEach((el) => observer.observe(el));

$(".toggle-names").click(function() {
  $(".toggle").toggle();
  e.stopPropagation();
});

$(".toggle-texts").click(function() {
  $(".text-swap").toggle();
  $(".text-default").toggle();
  e.stopPropagation();
})

$(".toggle-images").click(function(){
  $(".consumable-toggle").toggle("slow");
  $(".consumable-text").slideToggle();
})