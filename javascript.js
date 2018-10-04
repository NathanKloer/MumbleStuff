var config = {
    apiKey: "AIzaSyAjYW5iiOahbd2zAk5BbgB0EkJ_CtsvZcI",
    authDomain: "clickmasters2-55325.firebaseapp.com",
    databaseURL: "https://clickmasters2-55325.firebaseio.com",
    storageBucket: "clickmasters2-55325.appspot.com",
  };

  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  // Button for adding trains
  $("#add-msg-btn").on("click", function(event) {
    event.preventDefault();
  
    // User input
    var userName = $("#name-input").val().trim();
    var userMessage = $("#message-input").val().trim();
  
    // Creates "temporary" object for train data
    var newMessage = {
      name: userName,
      message: userMessage,
    };
  
    // Uploads train data to the database
    database.ref().push(newMessage);
  
    // Log to console 
    console.log(newMessage.name);
    console.log(newMessage.message);
  
    alert("message successfully added");
  
    // Clears userinput text-boxes
    $("#name-input").val("");
    $("#message-input").val("");
  });
  
  // Create Firebase event for adding train
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var userName = childSnapshot.val().name;
    var userMessage = childSnapshot.val().message;
    // train Info
    console.log(userName);
    console.log(userMessage);
  
    // Prettify the first train data and add am and pm


    // Create new row for data
    var newRow = $("<tr>").append(
      $("<td>").text(userName),
      $("<td>").text(userMessage),
    );
  
    // Append the new row to the table
    $("#message-table > tbody").append(newRow);
  });

