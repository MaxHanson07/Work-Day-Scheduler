// One row with time (hour), text area, and submit button. Each hour has its own row.
var newRow = $("<div>");
newRow.attr("class", "row", "time-block")

// Display time on top of the calender, Using moment.js grab the time
// Set the text of the P tag with the id of currentDay to be our time from moment.js
var currentTimeDisplay = (moment().format('MMMM Do YYYY, h:mm:ss a'));
$("#currentDay").text(currentTimeDisplay);

// Create an array to hold the hours that I need
var hours = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
var hr = 8;

// Loop over my array of hours and create a div for row, create div for hours, textarea, and a button
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
    textCol.text(textFromLocalStorage);

    // Compare the current hour to each hour on webpage (To learn which ones have past)
    // Give the elements (hour block) the classes that they need based on if they are past, present, or future
    var currentHr = moment().format("H");
 
    // Sets the hour blocks to their corresponding class in order to color code them in CSS
    if (parseInt(currentHr) > parseInt(textCol.attr("id"))) {
        textCol.addClass("past");
    }
    else if (currentHr === textCol.attr("id")) {
        textCol.addClass("present");
    }
    else {
        textCol.addClass("future");
    }

    // Create click event listener for my save buttons 
    saveCol.on("click", function (event) {
        // Grab the value of the text area and save it to a var in order to store it in local storage later
        var enteredText = $.trim(textCol.val());
        console.log(enteredText);

        // TODO: using localStorage.setItem save the text to local storage
        // localStorage.setItem(this.attr("data-hour"), enteredText)
        localStorage.setItem(saveCol.attr("data-hour"), enteredText)
        // localStorage.setItem("hour", hr)
    })

}

// localStorage.setItem("test", "My first note")
// localStorage.setItem("test1", "My second note")

// var text1FromLocalStorage = localStorage.getItem("test")
// $(".first").text(text1FromLocalStorage)

// var text2FromLocalStorage = localStorage.getItem("test1")

// $(".second").text(text2FromLocalStorage) 