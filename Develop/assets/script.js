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



    $(".saveBtn").on('click', function() { // caputures user input for each task description returns the value and trims it. 
        
        var hour = $(this).attr("title");
        console.log(hour);
        var timeSlotClassName = "." + hour;

        var description = $ (timeSlotClassName ).val().trim()//append() to text area where you want it to show up when pulled from local storage

        console.log('our current this ',this)
         console.log('our appointment: ', description)

        
        

        console.log(hour);

        var timeBlockValues = { 
       // variable set to a object with constructors inside of timeslot and text. 
            timeSlot: hour,         
            text: description       
        }
       
        console.log("OUR  schedule:\n ", timeBlockValues)
        userTextInput.push(timeBlockValues)             //pushes timeBlockValues object into userTexInput array.
        console.log(userTextInput)
        

        localStorage.setItem("userTextInput", JSON.stringify(userTextInput)); 
        loadUserInput();
    });
   
   var loadUserInput = function () {

      JSON.parse(localStorage.getItem("userTextInput"));
    
   
    $(".description").append(userTextInput);
   }
    

});

// $("#list-" + taskList).append(taskLi);