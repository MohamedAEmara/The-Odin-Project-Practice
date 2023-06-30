let companies1 = 
    [
        {
            "name": "Big Corporation",
            "numOfEmployees": 10000,
            "ceo": "Mary",
            "rating": 3.6
        },
        {
            "name": "Small Startup",
            "numOfEmployees": 3,
            "ceo": null,
            "rating": "4.3"
        }
    ]

    // Note.. Every JSON is a valid javascript code
    console.log(companies1);


    // We can strigify JSON file with backticks
    // Then to use it as Json we use JSON.parse()

    let companies2 = 
    `[
        {
            "name": "Big Corporation",
            "numOfEmployees": 10000,
            "ceo": "Mary",
            "rating": 3.6
        },
        {
            "name": "Small Startup",
            "numOfEmployees": 3,
            "ceo": null,
            "rating": 4.3
        }
    ]`


console.log(JSON.parse(companies2));

// We can also get the first object from the JSON object as follows:
console.log(JSON.parse(companies2)[0]);

// We also can access any field in that object
console.log(JSON.parse(companies2)[0].name);
console.log(JSON.parse(companies2)[1].rating);     

console.log(JSON.parse(companies2)[0].rating);


// Now, we can use external json file

fetch('companies.json')
  .then(response => response.json())
  .then(data => {
    // Now the variable `data` contains the JSON data from the file
    console.log(data);
    console.log(data[0].numOfEmployees);
  })
  .catch(error => {
    console.error('Error:', error);
});