// caputure user text input
//event listeners- that calls a function to capture text input 
// store user text input in global empty array 
// use constructor aka key value pairs inside of var = object
// before constructor is sent to local storage must stringify JSON.stringify(constructor) 
// with getting value back must parse the string..JSON.parse(constructor) *local storage only stores strings* 




var userTextInput = []; //empty array for userInputs of class: description 

$(document).ready(function () {    //document function call for all logic code 

    setInterval(function () {       //run current time moment object at 1000 millisecond intervals for header time
        var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
        $("#currentDay").text(currentTime)
    }, 1000)

    

    // function loadUserTextInput() {
    //         userTextInput = JSON.parse(localStorage.getItem("userTextInput"));
    //         //place loop for array ....each() or for ? to keep page updated when refreshed 

    //     }
    //   function saveUserTextInput() {
    //         localStorage.setItem("timeSlot", "hour", JSON.stringify(timeSlot, hour));
    //         localStorage.setItem("text","description", JSON.stringify(text, description));
    //     }
    
    function userInput() { // caputures user input for each task description returns the value and trims it. 

        var hour = $(this).attr("title")
        var timeSlotClassName = "." + hour;

        var description = $ (timeSlotClassName ).val().trim()//append() to text area where you want it to show up 

        console.log('our current this ',this)
        

        console.log('our appointment: ', description)

        //var hour = $("time-block")
        

        console.log(hour);

        var timeBlockValues = { 
       // variable set to a object with constructors inside of timeslot and text. 
            timeSlot: hour,         // **needs a loop to run more than once ...use .each() for looping over object/arrays/array-like objects.? 
            text: description       // not all values are being stored... need loop?
        }

        console.log("OUR  schedule:\n ", timeBlockValues)


        userTextInput.push(timeBlockValues)             //pushes timeBlockValues object into userTexInput array.
        console.log(userTextInput)

        $.each(userTextInput, function(timeBlockValues) {
            console.log(timeBlockValues);
        });
    }


    $(".saveBtn").on('click', userInput)         // eventlistener for callback -> click to call userInput





});