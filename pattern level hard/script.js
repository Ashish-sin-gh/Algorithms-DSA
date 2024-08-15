const displayOP = document.getElementById("op");

function pattern(inputVal){
    let n = inputVal;
    let i = 1;
    let fullPattern ='';

    while(i<=n){
    char = '';
    
    //print num1
    let j = 1;
    while(j <= n-i+1){
        char = char + j + "  ";
        j++;
    }
    
    //print t1
    let star = i-1;
    while(star){
        char= char + "*  ";
        star--;
    }

    //print t2
    let star2 = i-1;
    while(star2){
        char= char + "*  ";
        star2--;
    }

    //print num2
    j = 1;
    let num2 = n-i+1;
    while(j <= n-i+1){
        char = char + num2 + "  ";
        j++;
        num2--;
    }
    fullPattern += char + "\n";
    i++;
}
console.log(fullPattern);
return fullPattern;
}

document.getElementById("buttonOP").addEventListener("click",()=>{
    const inputVal = parseInt(document.getElementById("inputNumber").value);
    const patternIs = pattern(inputVal);
    op.textContent = patternIs;
});