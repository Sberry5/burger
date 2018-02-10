$(document).ready(function () {

// Handlers for data received from database
$(function() {
  $(".change-devoured").on("submit", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var newDevouredState = {
      devoured: newDevoured
    };
    $.ajax("/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);

        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // PreventDefault on a submit event
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

//   $(".delete-burger").on("click", function(event) {
//     var id = $(this).data("id");
//     // Send the DELETE request
//     $.ajax("/api/burgers/" + id, {
//       type: "DELETE",
//     }).then(
//       function() {
//         console.log("deleted burger", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });
// });
})