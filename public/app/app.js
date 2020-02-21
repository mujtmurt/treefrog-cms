function initButtons() {
  $("#home").click(function() {
    $("#home div").addClass("active");
    $("#addNav div").removeClass("active");

    $(".createMainNav").off(event);

    $(".text-wrapper").html(TREEFROG_SERVICE.getHomeContent());
    $(".btn-holder").html(TREEFROG_SERVICE.getHomeStartButton());

    addHomeListener();
  });
}

function addHomeListener() {
  $(".get-started").click(function() {
    $("#home div").removeClass("active");
    $("#addNav div").addClass("active");

    $(".text-wrapper").html(TREEFROG_SERVICE.getGetStartedContent());
    $(".btn-holder").html(TREEFROG_SERVICE.getCreateNavButtons());

    toggleModal();

    $(".get-started").off(event);
  });
}

function createMainNav() {
  $("#createMainNav").click(function() {
    inputCheck();
    quillEditor();
  });
}

function toggleModal() {
  $(".createMainNav").click(function() {
    $(".modal").css("display", "flex");
  });

  $(".clickBox").click(function() {
    $(".modal").css("display", "none");
  });

  $(".x-btn").click(function() {
    $(".modal").css("display", "none");
  });

  $(".cancel").click(function() {
    $(".modal").css("display", "none");
  });
}

function inputCheck() {
  var enteredInput = document.getElementById("navInput").value;

  // THIS CHECKS IF THERE'S ANYTHING IN THE INPUT AND LOWERCASES THE VALUE
  if (enteredInput) {
    var lowercaseValue = enteredInput.toLowerCase();
    alert(`Navigation created for ${lowercaseValue}`);

    $(".modal").css("display", "none");
    $(".text-wrapper").html(TREEFROG_SERVICE.getCreateMainNav());
    $(".btn-holder").html(TREEFROG_SERVICE.getSavePageInfo());
    $(".outputValue").html(`Nav > ${enteredInput}`);
  }

  // THIS IS IF YOU DON'T ENTER ANYTHING
  else {
    alert("Please enter the name for your navigation.");
  }
}

function quillEditor() {
  var quill = new Quill("#editor", {
    theme: "snow"
  });
}

$(document).ready(function() {
  initButtons();
  addHomeListener();
  createMainNav();
});
