
//added global variable
var gdata = null;

//this checks to see if the button was clicked and if it was then proceed with the if statement.
document.addEventListener("click", function (event) {
    if(event.target.matches("#button")) {
    fetch("https://official-joke-api.appspot.com/random_joke") 
    .then((response) => response.json())
    .then((data) => renderJoke(data))
    .catch(() => renderError());
    }
    //adding an else if statment allowed me to attach punchline to a second button.
    else if(event.target.matches("#button2")) {
        console.log(gdata)
        renderAnswer(gdata)
    };
});

//spliting the data received back from the response.Json() allowed me to create two buttons, for for the setup and one for the punchline.
   function renderJoke(data) {
       gdata = data;
       console.log(gdata)
       const setup = document.getElementById('setup');
       setup.innerHTML = data.setup;
   }

   function renderAnswer(data) {
    const punchline = document.getElementById("punchline");
    punchline.innerHTML = data.punchline;
   }

   // if the API isn't reached or something gose wrong the error() will kick in. 
   function renderError() {
    const error = document.getElementById("error");
    error.innerHTML = "You know what happens when you get an error?  your GET request for your API dosen't Work!";
    error.innerHTML = '';
   }

  


  