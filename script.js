let inputBox = document.querySelector('.input-field')
let submitBtn = document.querySelector('.result-btn')
let resultBox = document.querySelector('.result-box')
let resultPrint = document.querySelector('.result-print')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let grade = ""
    let result = ""
    const mark = inputBox.value
    if (mark < 0 || mark > 100 || mark == "") {
        alert('Mark should be between 0 - 100')
    } else if (mark >= 90 && mark <= 100) {
        grade = "A+"
        result = "Passed";
    } else if (mark >= 80 && mark < 90) {
        grade = "A"
        result = "Passed"
    } else if (mark >= 70 && mark < 80) {
        grade = "B+"
        result = "Passed"
    } else if (mark >= 60 && mark < 70) {
        grade = "B"
        result = "Passed"
    } else if (mark >= 50 && mark < 60) {
        grade = "C+"
        result = "Passed"
    } else if (mark >= 40 && mark < 50) {
        grade = "C"
        result = "Passed"
    } else if (mark >= 30 && mark < 40) {
        grade = "D+"
        result = "Passed"
    } else if (mark >= 20 && mark < 30) {
        grade = "D"
        result = "Failed"
    } else {
        grade = "E"
        result = "Failed"
    }
    
    if (result==="Passed"){
        resultBox.style.display = "block"
        resultBox.style.color = "green"
        resultBox.innerHTML = ` You are  ${result} <br>  ${grade}`
        
    }else{
        resultBox.style.display = "block"
        resultBox.style.color = "red"
        resultBox.innerHTML = `Sorry  ${result} <br> ${grade}`
    }

    if (mark === ""){
        resultBox.style.display = "none"
    }
    inputBox.focus()
    console.log(result, grade);

})
