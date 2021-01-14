/*
 * Custom Scripts go here!
 */

//IIFE - Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function
(function()
{
    //Initialization Function
    function Start()
    {
       
       console.log("App Started...");

       for (let index = 0; index < 5; index++) 
       {
           
        console.log(index);
          
        $("#clickMeButton").on("click", function() {
            console.log("Click Me Button is Depressed :(");
        });

       }
    }
    //Event Listener
    window.addEventListener("load", Start);

})();




 