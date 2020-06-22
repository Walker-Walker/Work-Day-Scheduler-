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



    $(".saveBtn").on('click', function (event) { // caputures user input for each task description returns the value and trims it. 
       event.preventDefault();
      
        var hour = $(this).attr("title");
        console.log(hour);
        var timeSlotClassName = "." + hour;

        var description = $(timeSlotClassName).val().trim()//append() to text area where you want it to show up when pulled from local storage

        console.log('our current this ', this)
        console.log('our appointment: ', description)




        console.log(hour);

        var timeBlockValues = {
            // variable set to a object with constructors inside of timeslot and text. 
            timeSlot: hour,
            text: description
        }

        console.log("OUR  schedule:\n ", timeBlockValues)
        userTextInput.push(timeBlockValues)             //pushes timeBlockValues object into userTexInput array.
        // console.log(userTextInput)


        localStorage.setItem("userTextInput", JSON.stringify(userTextInput));
        
       
    });

    var loadUserInput = function () {
       
        var userTextInput = JSON.parse(localStorage.getItem("userTextInput"));
        console.log("Test: "+userTextInput[0].timeSlot);
        console.log(userTextInput[0].text);
       $("#hour"+userTextInput[0].timeSlot).append(userTextInput[0].text);
       $("#hour"+userTextInput[1].timeSlot).append(userTextInput[1].text); 
       $("#hour"+userTextInput[2].timeSlot).append(userTextInput[2].text); 
       $("#hour"+userTextInput[3].timeSlot).append(userTextInput[3].text); 
       $("#hour"+userTextInput[4].timeSlot).append(userTextInput[4].text); 
       $("#hour"+userTextInput[5].timeSlot).append(userTextInput[5].text); 
       $("#hour"+userTextInput[6].timeSlot).append(userTextInput[6].text); 
       $("#hour"+userTextInput[7].timeSlot).append(userTextInput[7].text); 
       
        

    }

    loadUserInput();
    
});

// $("#list-" + taskList).append(taskLi);