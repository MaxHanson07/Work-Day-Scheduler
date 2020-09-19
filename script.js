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


// TODO: SHow the time on top of the calender, Using moment.js grab the time, and set the text of the P tag with the id of currentDay to be our time from moment.js
// Variable to be used to dispaly on html and later for if statements determining if events have past
var currentTimeDisplay = (moment().format('MMMM Do YYYY, h:mm:ss a'));
$("#currentDay").text(currentTimeDisplay);

// TODO:  Create an array to hold the hours that I need ["9 AM", "10 AM", "..." "12 PM" etc]
var hours = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
var hr = 8;

// TODO:  using a for loop
// TODO: loop over my array of hours and create a div for row, create div for hours, textarea, and a button\
for (let i = 0; i < hours.length; i++) {
    // Creates the three columns
    // Contains the hour
    hr++;
    var hourCol = $("<div>");
    hourCol.attr("class", "col-md-2", "hour")
    hourCol.text(hours[i])
    // Contains the textarea for user's event
    var textCol = $("<textarea>");
    textCol.attr("class", "col-md-8");
    textCol.attr("id", hr);
    // Contains the save button
    var saveCol = $("<button>");
    saveCol.attr("class", "col-md-2", "saveBtn")
    saveCol.text("Save");
    saveCol.attr("data-hour", hr);
    // Appends the three columns to the row
    newRow.append(hourCol, textCol, saveCol);
    $(".container").append(newRow);

    // Adds saved content to text area it belongs to
    var textFromLocalStorage = localStorage.getItem(saveCol.attr("data-hour"))
    $(".first").text(text1FromLocalStorage)

    // Compare the current hour to each hour on webpage (To learn which ones have past)
    // Give the elements (hour block) the classes that they need based on if they are past, present, or future
    // TODO: Fix 9:00 Am
    var currentHr = moment().format("H");
    console.log(currentHr);
    console.log(textCol.attr("id"))
    // TODO: Acting funky
    // if (currentHr > textCol.attr("id")) {
    //     textCol.attr("class", "past");
    // }
    // else if (currentHr === textCol.attr("id")) {
    //     textCol.attr("class", "present");
    // }
    // else {
    //     textCol.attr("class", "future");
    // }

    // TODO: Create click event listener for my buttons 
    saveCol.on("click", function (event) {
        // Grab the value of the text area and save it to a var in order to store it in local storage later
        var enteredText = textCol.val();
        console.log(enteredEvent);

        // TODO: using localStorage.setItem save the text to local storage
        localStorage.setItem(this.attr("data-hour"), enteredText)
        localStorage.setItem("hour", hr)


    })
   
}

// localStorage.setItem("test", "My first note")
// localStorage.setItem("test1", "My second note")

// var text1FromLocalStorage = localStorage.getItem("test")
// $(".first").text(text1FromLocalStorage)

// var text2FromLocalStorage = localStorage.getItem("test1")

// $(".second").text(text2FromLocalStorage) 