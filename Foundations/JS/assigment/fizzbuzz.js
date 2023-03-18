//let input = document.getElementById('input').value;

function fizzbuzz(num) {
    if(parseInt(num) % 3 == 0 && parseInt(num) % 5 == 0)
        alert("FizzBuzz");
    else if(parseInt(num) % 3 == 0)
        alert("Fizz");
    else if(parseInt(num) % 5 == 0)
        alert("Buzz");
    else alert(num);
}

function getInputValue(){
    var inputVal = document.getElementById("myInput").value;
    
    // alert(inputVal);
    return fizzbuzz(inputVal);
}

document.getElementById('outputFizzBuzz').innerHTML = fizzbuzz(getInputValue());