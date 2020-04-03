function addMainNav(navName) {
  console.timeLog("add ", navName);

  let pageFakeData = {
    navName: navName,
    content: "<h1> HELLO </h1>",
    subNavs: []
  };

  TREEFROG_SERVICE.saveData(pageFakeData);
}

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
    var enteredInput = document.getElementById("navInput").value;

    console.log("nav name ", enteredInput);
    TREEFROG_SERVICE.checkMainNavName(enteredInput, addMainNav);
    // inputCheck();
    // quillEditor();
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
  var lowercaseValue = enteredInput.toLowerCase();

  // var navArray = ["home", "about", "products"];

  var notDuplicate = true;

  for (var i = 0; i < navArray.length; i++) {
    if (navArray[i] === lowercaseValue) {
      notDuplicate = false;
      alert("This navigation is already created.");
    }
  }

  if (enteredInput && notDuplicate) {
    // alert(`Navigation - ${enteredInput} has been created`);

    navArray.push(lowercaseValue);
    console.log(navArray);

    $(".modal").css("display", "none");
    $(".text-wrapper").html(TREEFROG_SERVICE.getCreateMainNav());
    $(".btn-holder").html(TREEFROG_SERVICE.getSavePageInfo());
    // $(".btn-holder").html("");
    $(".outputValue").html(`Nav > ${enteredInput}`);
  } else if (!enteredInput) {
    alert("Please enter the name for your navigation.");
  }
}

var toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"] // remove formatting button
];

function quillEditor() {
  var quill = new Quill("#editor", {
    modules: {
      toolbar: toolbarOptions
    },
    theme: "snow"
  });

  $(".savePage").click(function(e) {
    e.preventDefault();
    var justHTML = quill.root.innerHTML;
    $("#quillContent").html(justHTML);
  });
}

$(document).ready(function() {
  initButtons();
  addHomeListener();
  createMainNav();
  TREEFROG_SERVICE.initFirebase();
});
