//this function is to make the gif visible when  the button is clicked by adding image--visible to the class image
async function show()
{
    imageid.classList.add('image--visible');
    
}

//for using div tag with id="msgDiv" in code further
msgDiv = document.getElementById('msgDiv');

//this function fetch the joke through api from the given url
async function getJoke()
{
    const jokeData = await fetch('https://icanhazdadjoke.com/',
    {
        headers:{
            'Accept':'application/json'
        }
    });
    const jokeObj = await jokeData.json(); 
    //converting the joke which was fetched in jokeData as json format and storing it in object 'jokeObj' 

    return jokeObj;
    //returning the jokeObj which contains the joke
}

//this function sets the time interval of pop-up notification and also display the joke in pop-up notification
showNotif = () => {
    setInterval(()=>{
        msgDiv.classList.remove('toast--visible'); //making the pop-up invisible

        let message = getJoke().then((joke) => {    
            message = joke.joke;             //getting the joke stored in message
            msgDiv.textContent = message;    //displaying message in div tag

            setTimeout(() => {              //sound will beep 10 sec after previous pop-up is made invisible
                document.getElementById('mySound').play();
              }, 10000);

            setTimeout(()=>{                //pop-up is made visible 10 sec after previous pop-up is made invisible
                msgDiv.classList.add('toast--visible');
            },10000);  
        });  
    },20000);    //this async function repeats itself again and again in 20 sec
};


showNotif();  //calling the function