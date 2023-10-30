document.addEventListener("DOMContentLoaded", function () {
  var shuffleLink = document.getElementById("shuffle-link");

  shuffleLink.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(".card-0").style.animation =
      "shuffle 0.5s 4 backwards";
    document.querySelector(".card-1").style.animation =
      "shuffle 0.8s 4 backwards";
    document.querySelector(".card-3").style.animation = "shuffle 1s 2 linear";
    document.querySelector(".card-4").style.animation = "shuffle 0.8s 4 linear";

    var delay = 4600;

    setTimeout(function () {
      window.location.href = "past.html";
    }, delay);
  });
});
