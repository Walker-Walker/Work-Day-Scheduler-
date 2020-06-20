   // caputure user text input
            //event listeners- that calls a function to capture text input 
   // store user text input in global empty array 
            // use constructor aka key value pairs inside of var = object
            // before constructor is sent to local storage must stringify JSON.stringify(constructor) 
            // with getting value back must parse the string..JSON.parse(constructor) *local storage only stores strings* 

    



     $( document ).ready(function() {
     setInterval(function () {
           var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
            $("#currentDay").text(currentTime)
        }, 1000) 

        var userTextInput = [];

   function userInput() {
        var description = $(".description").val().trim()
        var timeBlockValues = {
                timeSlot: null,
                text: description 
        }
       

        userTextInput.push(timeBlockValues)
        console.log(userTextInput);
   }
 
    $(".saveBtn").on('click',userInput)
       

    
 
       
      });