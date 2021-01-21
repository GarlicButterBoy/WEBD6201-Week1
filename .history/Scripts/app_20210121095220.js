/*
 * Custom Scripts go here!
 */

//IIFE - Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function
//Closure - Limits Scope Leak

"use strict";

(function()
{

    function displayHome()
    {

    }

    function displayAbout()
    {
        
    }

    function displayProducts()
    {
        
    }

    function displayServices()
    {
        
    }

    function displayContact()
    {
        let messageArea = document.getElementById("messageArea");
        messageArea.hidden = true;

        //form validation
        let fullName = document.getElementById("fullName");
        fullName.addEventListener("blur", function() 
        {
            if (fullName.nodeValue.length < 2)
            {
                fullName.focus();
                fullName.select();
                messageArea.hidden = false;
                messageArea.textContent = "Please enter more than 2 chars";
            }
            else
            {
                messageArea.hidden = true;
            }
        });

        let sendButton = document.ge
    }

    //Initialization Function
    function Start()
    {
       
       console.log("App Started...");
       switch(document.title)
       {
           case 'Home':
               displayHome();
               break;
           case 'About':
               displayAbout();
               break;
           case 'Products':
               displayProducts();
               break;
           case 'Services':
               displayServices();
               break;
           case 'Contact':
               displayContact();
               break;        
       } 

/*
       let paragraphOneText = "This is a simple site to demonstrate DOM Manipulation for ICE 01.";

       let paragraphOneElement = document.getElementById("paragraphOne");

       paragraphOneElement.className = "fs-5 fw-bold";
       paragraphOneElement.textContent = paragraphOneText;

       //Step 1. document.createElement
       let newParagraph = document.createElement("p");
       //Step 2. Configure the element
       newParagraph.setAttribute("id", "paragraphTwo");
       newParagraph.textContent = "...And this is paragraph Two.";
       //Step 3. Select the parent
       let mainContent = document.getElementsByTagName("main")[0];
       //Step 4. Add/Insert the element 
       mainContent.appendChild(newParagraph);

       paragraphTwo.className = "fs-6";

       //Another way to inject a comment
       let paragraphDiv = document.createElement('div'); 
       let paragraphThree = `<p class="fs-7" fw-bold>This is the third paragraph.</p>`; 
       paragraphDiv.innerHTML = paragraphThree;
       
       //Insertion Before
       //paragraphTwo.before(paragraphDiv);

       //Insertion After
       paragraphTwo.after(paragraphDiv); 

       //deletions
       //target an element
       //paragraphOneElement.remove();//remove a single element
       //target a child (rough)
       mainContent.removeChild(paragraphOneElement); 

       //updates/modifications
       //paragraphTwoElement.firstChild.textContent = "This is an update. Welcome back!";
       mainContent.firstElementChild.textContent = "This is an update. Welcome back!";

        mainContent.innerHTML = 
        `
        <h1 id="firstHeading">Welcome to Webd6201 - Lab 1</h1>
        <p id="firstParagraph" class="fw-bold">This is the first paragraph</p>
        `;
*/
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




 