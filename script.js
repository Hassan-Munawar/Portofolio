$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  });

  // smooth scrolling

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});

document.querySelectorAll(".box img").forEach((img) => {
  img.addEventListener("click", () => {
    alert("This feature will be available soon!");
  });
});

document.querySelectorAll("form .btn").forEach((img) => {
  img.addEventListener("click", () => {
    alert(
      "Team are working on this feature kindly catch us through whatsapp or Facebook. Thanks!"
    );
  });
});

document.querySelectorAll(".Resume").forEach((img) => {
  img.addEventListener("click", () => {
    alert("This feature will be available soon!");
  });
});
