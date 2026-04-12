let usersData = [];

$(document).ready(function() {
  $("#alertBox").removeClass("d-none").text("Click 'Load Users' to fetch data.");
});


$("#loadBtn").click(function() {
  $("#alertBox").removeClass("d-none alert-danger").addClass("alert-info")
                .text("Loading users...");

  $.get("https://jsonplaceholder.typicode.com/users", function(data) {
    usersData = data;
    displayUsers(usersData);

    $("#alertBox").removeClass("alert-info").addClass("alert-success")
                  .text("Users loaded successfully!");
  }).fail(function() {
    $("#alertBox").removeClass("alert-info").addClass("alert-danger")
                  .text("Failed to load users.");
  });
});


function displayUsers(users) {
  $("#userTable").empty();

  $.each(users, function(index, user) {
    let row = `
      <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.address.city}</td>
      </tr>
    `;
    $("#userTable").append(row);
  });
}

$("#search").on("keyup", function() {
  let value = $(this).val().toLowerCase();

  let filteredUsers = usersData.filter(function(user) {
    return user.name.toLowerCase().includes(value);
  });

  displayUsers(filteredUsers);
});