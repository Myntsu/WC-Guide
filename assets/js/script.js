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

// Data (ACD)
$(".data").click(function() {
  $(".text-default").toggle();
  $(".text-swap").toggle();
})

// Skills
$(".skills").click(function() {
  $(".name-toggle").toggle();
  $(".eye-toggle-on").toggle();
	if($(".eye-toggle-on").css('display') == 'none') {
		$(".eye-toggle-on").addClass('eye-active');
	} else {
		$(".eye-toggle-on").removeClass('eye-active');
	}
});

// Consumables
$(".consumables").click(function(){
  $(".consumable-toggle").toggle();
  $(".consumable-text").toggle();
})

// Autoloot
$(".autoloot").click(function() {
  $(".autoloot-text").slideToggle("slow");
  $(".eye-toggle-off").toggle();
  if($(".eye-toggle-off").css('display') == 'none') {
		$(".eye-toggle-off").addClass('eye-active');
	} else {
		$(".eye-toggle-off").removeClass('eye-active');
	}
})

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}