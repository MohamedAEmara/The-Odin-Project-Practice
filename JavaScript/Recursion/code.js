let company = {
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 1600
    }],
  
    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],
  
      internals: [{
        name: 'Jack',
        salary: 1300
      }]
    }
};


// We want to sum up all salaries of the company..

/* 
    As we can see, when our function gets a department to sum, there are two possible cases:

Either it’s a “simple” department with an array of people – then we can sum the salaries in a simple loop.
Or it’s an object with N subdepartments – then we can make N recursive calls to get the sum for each of the subdeps and combine the results.
*/

function sumSalaries(department) {
    if(Array.isArray(department))       // case 1 
        return department.reduce((prev, current) => prev + current.salary, 0);  // summ the array
    else {
        let sum = 0;
        for(let subdep of Object.values(department)) {
            sum += sumSalaries(subdep);     // recursively call for subdepartmetns, sum the results
        }
        return sum;
    }

}

alert(sumSalaries(company));    // 7700





// ========================================= Linked list ============================================ //

let list = {
    value: 1, 
    next: {
        value: 2,
        next: {
            value: 3, 
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// An alternative code for creating the same list:

let listt = { value: 1 };
list.next = { value: 2};
list.next.next = { value: 3};
list.next.next.next = { value: 4};
list.next.next.next.next = null;

// To remove an element from the middle, change next of the previous one
list.next = list.next.next;

// We made list.next jump over 1 to value 2. 
// The value 1 is now excluded from the chain. If it’s not stored anywhere else, it will be automatically removed from the memory.




const tree = {
    name: 'John',
    children: [
        {
            name: 'Jim',
            children: []
        },
        {
            name: 'Zoe',
            children: [
                { name: 'Kyle', children: [] },
                { name: 'Sophia', children: []}
            ]
        }
    ]
}


// Print all the children all the way down..

// Jone => Jim => Zeo => Kyle => Sohpia

function printChildrenRecursive(t) {
    if(t.children == null) {    // or "t.children.length === 0"
        console.log('Base Case..');
        return;
    }
    let childrenn = t.children;
    childrenn.forEach(element => {
        console.log('in forEach loop');
        console.log(element.name);
        return printChildrenRecursive(element);
    });
}



printChildrenRecursive(tree);



// Write a  function that  returns an array containing repetitions of the number argument. 
// For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.


function fun(n, x) {
    if(n == 0)
        return [];
    return [x].concat(fun(n-1, x));
}


console.log(fun(3, 5));
console.log(fun(4, 7));