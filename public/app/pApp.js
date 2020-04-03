// Practice App dot js file

function init() {
  $("#getData").click(function(e) {
    PRACTICE_SERVICE.getAllData(displayData);
  });

  $("#addData").click(function(e) {
    e.preventDefault();

    // get info from input box lowercase data and then submit to practice
    var navData = $("#nav-input")
      .val()
      .trim()
      .toLowerCase();

    if (navData == "") {
      alert("add name");
    } else {
      PRACTICE_SERVICE.checkPages(navData, alertUser);
      $("#nav-input").val("");
    }
  });
}

function alertUser(result) {
  alert(result);
}

function displayData(allData) {
  var container = `<nav class="displayNavigation">`;

  allData.forEach(function(doc) {
    var id = doc.id;
    var rawData = doc.data();

    container += `<a href="#" class="navName" id="${id}">${rawData.navName}
                  <p><i>(click on the link to delete!)</i></p>
    </a>
      
    `;
    container += ``;
  });

  container += `</nav>`;
  $(".showData").html(container);

  addNavListener();
  deleteNavListener();
}

function addNavListener() {
  $("nav a").click(function(e) {
    var id = e.currentTarget.id;
    var newNavName = $("#updateContent")
      .val()
      .trim()
      .toLowerCase();

    PRACTICE_SERVICE.updateData(id, newNavName, displayData);
  });
}

function deleteNavListener() {
  $(".navName").click(function(e) {
    var id = e.currentTarget.id;

    PRACTICE_SERVICE.deleteData(id, displayData);
  });
}

$(document).ready(function() {
  PRACTICE_SERVICE.initFirebase(init);
});
