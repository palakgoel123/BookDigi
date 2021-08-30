$(document).ready(function () {
  $(".gallery .btn4").click(function () {
    let filter = $(this).attr("data-filter");
    if (filter == "all") {
      $(".gallery .store").show(400);
    } else {
      $(".gallery .store")
        .not("." + filter)
        .hide(200);
      $(".gallery .store")
        .filter("." + filter)
        .show(400);
    }
    $(this).addClass("button-active").siblings().removeClass("button-active");
  });
});
