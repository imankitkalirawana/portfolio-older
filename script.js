/** @format */

const mnavbar = document.getElementById("mnavbar");

function shownav() {
  mnavbar.classList.toggle("smnavbar");
}

var typed = new Typed(".typing", {
  strings: ["Developer", "Blogger", "Programmer", "Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

$(window).scroll(function () {
  // sticky navbar on scroll script
  if (this.scrollY > 80) {
    $(".head").addClass("sticky");
  } else {
    $(".head").removeClass("sticky");
  }
});

// owl carousel script
$(".carousel1").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeOut: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    800: {
      items: 2,
      nav: false,
    },
    // 1000: {
    //   items: 3,
    //   nav: false,
    // },
  },
});
