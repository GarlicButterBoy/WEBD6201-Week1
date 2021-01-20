/*
 * Custom Scripts go here!
 */

//IIFE - Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function
//Closure - Limits Scope Leak
(function()
{
    //Initialization Function
    function Start()
    {
       
       console.log("App Started...");

       for (let index = 0; index < 5; index++) 
       {
           
        console.log(index);
          
        let clickMeButton = document.getElementById("clickMeButton");
            
        let paragraphOneText = ;

        clickMeButton.addEventListener("click", ()=> 
        {
            console.log("Click me button was depressed :(");
        });
       }
    }
    //Event Listener
    window.addEventListener("load", Start);

})();




 