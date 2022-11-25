// add wrong word highlight
// add completion screen
// add stats

var randomWords = require('random-words')
let textPara = document.getElementsByClassName("text")[0]
let DummyWords = 15 
let text = "";
let count = 0
function buildDummyPara(){
    text = randomWords({ exactly: DummyWords, join: ' '/*,formatter: (word) => `<span id=\"${word}\">` + word + "</span>"}*/})
    textPara.innerHTML = text
}

function keyPress(){
    document.addEventListener("keydown", ((e)=>{
        console.log(String.fromCharCode(e.keyCode || e.which).toLocaleLowerCase(), textPara.innerText.charAt(count))
        if(String.fromCharCode(e.keyCode || e.which).toLocaleLowerCase() == textPara.innerText.charAt(count)) highlightText(count+1,"success")
        else highlightText(count+1,"failure")
        count++
    }))
}
function highlightText(index,state){
    // index+=countSpaces(textPara.innerText.slice(0,index))
    textPara.innerHTML = `<span id=\"highlight-${state}\">`+ textPara.innerText.slice(0,index) + "</span>" + textPara.innerText.slice(index,textPara.innerText.length)
}

function countSpaces(str){
    let count = 0;
    str.split("").forEach(element => {
        if(element === " ") count++;
    });
    return count;
}


// buildDummyPara()
keyPress();
