$(document).ready(function () {

// // Handlers for data received from database

$('body').on('click', ".change-devoured").on("submit", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var devoured = $(this).data("newdevoured");

    var newDevouredState = {
      devoured: 0
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


//   $(".create-form").on("submit", function(event) {
//     event.preventDefault();
//     var newBurger = {
//       name: $("#ca").val().trim(),
//       devoured: $("[name=devoured]:checked").val().trim()
//     };

//     // Send the POST request.
//     $.ajax("/api/burgers", {
//       type: "POST",
//       data: newBurger
//     }).then(
//       function() {
//         console.log("created new burger");
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });
// })

// // Close on document function
})