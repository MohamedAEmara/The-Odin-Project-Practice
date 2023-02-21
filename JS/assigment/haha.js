const   fruits = ['Banana', 'Orange', 'Mango', 'Apple'];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";
document.getElementById("show-list").innerHTML = text;

function myFunction(value)
{
    text += "<li>" + value + "</li>";
}


