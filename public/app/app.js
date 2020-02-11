function initButtons() {
  $(".get-started").click(function() {
    $("#home div").removeClass("active");
    $("#addNav div").addClass("active");

    $(".text-wrapper").html(TREEFROG_SERVICE.getGetStartedContent());
    $(".btn-holder").html(TREEFROG_SERVICE.getCreateNavButtons());

    $(".createMainNav").click(function() {
      $(".modal").css("display", "flex");
    });
  });

  $("#home").click(function() {
    $("#home div").addClass("active");
    $("#addNav div").removeClass("active");

    $(".text-wrapper").html(TREEFROG_SERVICE.getHomeContent());
    $(".btn-holder").html(TREEFROG_SERVICE.getHomeStartButton());
  });
}

$(document).ready(function() {
  initButtons();
});
