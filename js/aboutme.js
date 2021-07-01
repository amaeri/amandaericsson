// //Prototype
let refIndex = 1;
showRefs(refIndex);

// Next/previous controls
function plusSlides(n) {
  showRefs(refIndex += n);
}

// Thumbnail image controls
function currentRefs(n) {
  showRefs(refIndex = n);
}

function showRefs(n) {
  let i;
  let refs = document.getElementsByClassName("ref-container__slides");
  let dots = document.getElementsByClassName("ref-container__dots--refdot");
  if (n > refs.length) {
    refIndex = 1
  }
  if (n < 1) {
    refIndex = refs.length
  }
  for (i = 0; i < refs.length; i++) {
    refs[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" ref-active", "");
  }
  refs[refIndex - 1].style.display = "grid";
  dots[refIndex - 1].className += " ref-active";
}