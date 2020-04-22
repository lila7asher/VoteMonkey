const submitBtn = document.querySelector("#submitbtn");
const survey = document.querySelector("#issuebox");
const result = document.querySelector("#suggestion");
const name = document.querySelector("#candname");
const suggest = document.querySelector("#suggestlink");

submitBtn.addEventListener("click", ()=>{
    survey.style.display = "none";
    result.style.display = "block";
})

console.log("done")