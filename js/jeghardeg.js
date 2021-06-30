let adIndex = 1;
showAds(adIndex);

// Next/previous controls
function plusSlides(n) {
  showAds(adIndex += n);
}

// Thumbnail image controls
function currentAds(n) {
  showAds(adIndex = n);
}

function showAds(n) {
  let i;
  let ads = document.getElementsByClassName("ads-container__ads");
  let dots = document.getElementsByClassName("ads-container__dots--jeghardeg-dot");
  if (n > ads.length) {
    adIndex = 1
  }
  if (n < 1) {
    adIndex = ads.length
  }
  for (i = 0; i < ads.length; i++) {
    ads[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" jeghardeg-active", "");
  }
  ads[adIndex - 1].style.display = "grid";
  dots[adIndex - 1].className += " jeghardeg-active";
}