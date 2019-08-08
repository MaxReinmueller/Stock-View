  // 1. configures firebase 
  var firebaseConfig = {
    apiKey: "AIzaSyCyUvthk6DWp218I7uBLEWQgmekHSLe35A",
    authDomain: "stock-view-3b7f1.firebaseapp.com",
    databaseURL: "https://stock-view-3b7f1.firebaseio.com",
    projectId: "stock-view-3b7f1",
    storageBucket: "",
    messagingSenderId: "212611526571",
    appId: "1:212611526571:web:5b4a3e255af70abc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var database = firebase.database();

// 2. button for adding employees
$("#addStock").on('click', function(event) {
event.preventDefault(); 

    // Gets user data inputs
    var stName = $('#stockName').val().trim();
    var stTicker = $("#stockTicker").val().toUpperCase().trim();
    var stNotes = $('#stockNotes').val().trim();

    console.log(stName);
    console.log(stTicker)
    console.log(stNotes);

    // creates local temporary object for storing user data
    var newStock = {
        name: stName,
        ticker: stTicker,
        notes: stNotes,
    }
    console.log(newStock);

    // Uploads temporary object to the database
    database.ref().push(newStock);

    // logs uploaded data to the console
    // console.log(newTrain);

    alert("New Stock added successfully!!");

    // clears form text boxes
    $('#stockName').val("");
    $('#stockTicker').val("");
    $('#stockNotes').val("");
});
// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    // stores everything in a variable
    var nameOfStock = childSnapshot.val().name;
    var tickerOfStock = childSnapshot.val().ticker;
    var notesOfStock = childSnapshot.val().notes;


    // console logs info
    console.log(nameOfStock);
    console.log(tickerOfStock);
    console.log(notesOfStock);
  

    // creates new row
    var newRow = $("<tr>").append(
        $("<td>").text(nameOfStock),
        $("<td>").text(tickerOfStock),
        $("<td>").text(notesOfStock),

    );
    // append new row to the table
        $("#stockTable  > tbody").append(newRow)
});

// removes from the list
$(".removeButton").click(function(){
    firebase.database().ref(CHILD_TO_DELETE).remove();
  });

  $('table').on('click', 'input[type="button"]', function(e){
    $(this).closest('tr').remove()
 })