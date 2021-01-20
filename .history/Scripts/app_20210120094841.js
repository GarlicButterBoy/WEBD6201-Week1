/*
 * Custom Scripts go here!
 */

//IIFE - Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function
//Closure - Limits Scope Leak

"use strict";

(function()
{
    //Initialization Function
    function Start()
    {
       
       console.log("App Started...");

       let paragraphOneText = "This is a simple site to demonstrate DOM Manipulation for ICE 01.";

       let paragraphOneElement = document.getElementById("paragraphOne");

       paragraphOneElement.className = "fs-5 fw-bold";
       paragraphOneElement.textContent = paragraphOneText;

       //Step 1. document.createElement
       let newParagraph = document.createElement("p");
       //Step 2. Configure the element
       newParagraph.setAttribute("id", "paragraphTwo");
       newParagraph.textContent = "...And this is paragraph Two.";
       //Step 3. Add/Insert the element
        

       for (let index = 0; index < 5; index++) 
       {
           
        console.log(index);
          
        let clickMeButton = document.getElementById("clickMeButton");
            
        

        clickMeButton.addEventListener("click", ()=> 
        {
            console.log("Click me button was depressed :(");
        });
       }
    }
    //Event Listener
    window.addEventListener("load", Start);

})();




 