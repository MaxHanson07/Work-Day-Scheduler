console.log(moment().format());
console.log(moment().format("h A"));

// TODO: Create one row with time, text area, and button using JQ
// Here's the layout of what we need to make using JQ
{/* <div class="row  time-block">
<div class="col-md-2 hour">
  9 AM
</div>
<textarea class="col-md-8 past">
  
</textarea>
<button class="col-md-2 saveBtn ">
  Save
</button>
</div> */}

// One row with time (hour), text area, and submit button. Each hour has its own row.
var newRow = $("<div>");
newRow.attr("class", "row", "time-block")

// TODO: will be used in loop later when creating rows
// Creates the three columns
// Contains the hour
var hourCol = $("<div>");
hourCol.attr("class", "col-md-2", "hour")
// Contains the textarea for user's event
var textCol = $("<textarea>");
textCol.attr("class", "col-md-8", "past")
// Contains the save button
var saveCol = $("<button>");
saveCol.attr("class", "col-md-2", "saveBtn")
// Appends the three columns to the row
newRow.append(hourCol, textCol, saveCol);




// TODO: SHow the time on top of the calender, Using moment.js grab the time, and set the text of the P tag with the id of currentDay to be our time from moment.js
// Variable to be used to dispaly on html and later for if statements determining if events have past
var currentTime = (moment().format('MMMM Do YYYY, h:mm:ss a'));
$("#currentDay").text(currentTime)



// TODO:  Create an array to hold the hours that I need ["9 AM", "10 AM", "..." "12 PM" etc]

// TODO:  using a for loop


// TODO: loop over my array of hours and create a div for row, create div for hours, textarea, and a button\

// TODO: give the elements some content 

// TODO: How can I compare the hours of my rows, to the current time? (Use moment.js get the current time and compare to the time that is being assigned to the row)

// TODO:  give the elements the classes that they need e.g using an if statment we can check using monet.js to see if the hour that we're looping ove is past the current hour if so give the text area the class of past

// TODO: Create click event listener for my buttons 

// TODO:  Grab the value of the text are and save it to a var (I nedd to be able to save the text from the text area that is in the same row as my button)

// TODO: using localStorage.setItem save the text to local storage

// TODO: retrieve the data from local storage using localStorage.getItem and show them back on the text area that they belong to (How can i know what text from local storage goes to what text area?)

localStorage.setItem("test", "My first note" )
localStorage.setItem("test1", "My second note" )


var text1FromLocalStorage= localStorage.getItem("test")
$(".first").text(text1FromLocalStorage)

var text2FromLocalStorage= localStorage.getItem("test1")

$(".second").text(text2FromLocalStorage) 