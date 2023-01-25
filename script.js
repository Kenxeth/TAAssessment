let inputBtn = document.getElementById("inputBtn")
let JSsource = document.getElementById("script").src
function getInput(){
    let input = document.getElementById("input").value;
    
    if(input.toLowerCase() == "home" || input.toLowerCase() == "1"){
        document.location.pathname = "index.html";
    }
    else if(input.toLowerCase() == "about me"  || input.toLowerCase() == "2"){
        document.location.pathname = "../htmlFiles/aboutme.html";
    }else if(input.toLowerCase() == "socials" || input.toLowerCase() == "3"){
        document.location.pathname = "../htmlFiles/socials.html";
    }else if(input.toLowerCase() == "hobbies" || input.toLowerCase() == "4"){
        document.location.pathname = "../htmlFiles/hobbies.html"
    }
}

inputBtn.addEventListener("click", getInput)

