function checkCreds() {
    //input validation for week 3
    console.log("checkCreds() started");
    document.getElementById("loginStatus").innerHTML = "status of login";
    //variables we need
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    var zipCodeNumb;
    //fill in the variables\

    //working on inputting first name
    firstName = document.getElementById("fName").value;
    console.log("The first name was inputted as " + firstName);

    lastName = document.getElementById("lName").value;
    console.log("The last name was inputted as " + lastName);
    //last name
    zipCode = document.getElementById("zipCode").value;
    console.log("The zipCode was inputted as " + zipCode);
    //zipcode input
    fullName = firstName + lastName
    console.log("The full name was inputted as " + fullName);

    fullNameLength = fullName.length;

    console.log("The full name has  " + fullNameLength + "characters.");
    zipCodeNumb = parseInt(zipCode);
    console.log(" The zip code number is" + zipCodeNumb);

    //things to check for...  full name length is less than 20, 
    //zipcode has only 5 digits
    if (fullNameLength > 20) {
        document.getElementById("loginStatus").innerHTML = "Invalid full name";

    } else if (zipCode.length != 5) {
        //zip code
        document.getElementById("loginStatus").innerHTML = "Invalid zipCode";
    } else {
        //invalid zip code
        alert("User Credentials passed, Welcome to the site," + fullName);
    }

}
function checkPalin() {
    Console.log("checkPalin() started");
}
function playStation() {
    // write to the log for debugging
    console.log("playStation() started");
    mysound = new sound("us-lab-background-1.mp3");
    console.log("playing us-lab-background-1 using the sound() function");
    mysound.play();
}
function playBowie() {
    // write to the log for debugging
    console.log("playBowie() started");
    mysound1 = new sound("calm-river.mp3");
    console.log("playing us-lab-background-1 using the sound() function");
    mysound1.play();
}

function sound(srcFile) {
    //create an instance of the audio class
    this.sound = document.createElement("audio");
    //sets the source for the srcFile
    this.sound.src = srcFile;
    //loads everything needed for audio
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    //load no controls for audio- just play the audio
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
        //play sound
    }
    this.stop = function(){
        //stop the sound
        this.sound.pause();
        //pause audio
    
    }
}