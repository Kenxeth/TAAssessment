let inputBtn = document.getElementById("inputBtn")
let JSsource = document.getElementById("script").src
function getInput(){
    let input = document.getElementById("input").value;
    
    if(input.toLowerCase() == "home" || input.toLowerCase() == "1"){
        document.location.pathname = "TAAssessment/index.html";
    }
    else if(input.toLowerCase() == "about me"  || input.toLowerCase() == "2"){
        document.location.pathname = "TAAssessment/htmlFiles/aboutme.html";
    }else if(input.toLowerCase() == "socials" || input.toLowerCase() == "3"){
        document.location.pathname = "TAAssessment/htmlFiles/socials.html";
    }else if(input.toLowerCase() == "hobbies" || input.toLowerCase() == "4"){
        document.location.pathname = "TAAssessment/htmlFiles/hobbies.html"
    }
}

inputBtn.addEventListener("click", getInput)

