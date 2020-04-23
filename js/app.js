const submitBtn = document.querySelector("#submitbtn");
const survey = document.querySelector("#issuebox");
const result = document.querySelector("#suggestion");
const candname = document.querySelector("#candname");
const suggest = document.querySelector("#suggestlink");

submitBtn.addEventListener("click", ()=>{
    if(document.querySelector("#banana").checked){
        candname.textContent = "Chaussette";
        suggest.href = "profiles.html#chaussette";
        survey.style.display = "none";
        result.style.display = "block";
    }else if(document.querySelector("#air").checked){
        candname.textContent = "Swinger";
        suggest.href = "profiles.html#swinger";
        survey.style.display = "none";
        result.style.display = "block";
    }else if(document.querySelector("#humans").checked){
        candname.textContent = "Napoleon";
        suggest.href = "profiles.html#napoleon";
        survey.style.display = "none";
        result.style.display = "block";
    }else{
        alert("Please select an issue from the list")
    }
})