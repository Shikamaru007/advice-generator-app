const generateBtn = document.getElementById("btn");
let count = 0;

generateBtn.addEventListener("click", () => {
    


    fetch("https://api.adviceslip.com/advice?timestamp=<random_number>").then(response => {
        if(!response.ok){
            throw new Error(window.alert("Couldn't load advices"));
        }
        return response.json();
    }).then(data => getData(data)).catch(error => window.alert(error));

 });

 function getData(data){
    const advice = data.slip.advice;
    const id = data.slip.id
    displayAdvice(advice, id);    
}

function displayAdvice(advice){
    const textBox = document.getElementById("quote");
    const adviceCount = document.getElementById("adviceCount");

    textBox.innerText = `“ ${advice} ”`;
    count++;
    adviceCount.textContent = count;
}

