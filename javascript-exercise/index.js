function calc(){
  let name = document.getElementById("name").value;
  let age = Number(document.getElementById("age").value);
  let course = document.getElementById("course").value;

  let html = Number(document.getElementById("html").value);
  let css = Number(document.getElementById("css").value);
  let js = Number(document.getElementById("js").value);

  let total = html + css + js;
  let average = total / 3;

  let result = `
Student Name: ${name}
Age: ${age}
Course: ${course}

Total Marks: ${total}
Average: ${average}
  `;

//  function displayResult() {
//   document.getElementById("output").textContent = result;
// }
console.log (result)
}

A1
// Function declaration
function introduce() {                                   
    console.log("my name is Alex");
}

// Calling the function
introduce();

A2
// Function expression
const introduce2 = function() {
    console.log("my name is Alex");
};

// Calling the function
introduce2();

A3
// Arrow function
const introduce3 = () => {
    console.log("my name is Alex");
};

// Calling the function
introduce3();

B1
// Arrow function
const add = (a, b) => {
    return a + b;
};

// Log the result
console.log(add(4, 7));

B2 
// Arrow function
const greetUser = (name) => {
    return `welcome, ${name}!`;
};

// Call the function with my name and log the result
console.log(greetUser("Noah"));

B3
// Function with default parameter
function multiply(a, b = 2) {
    return a * b;
}

// Test the function
console.log(multiply(5));    // uses default b = 2
console.log(multiply(5, 4)); // uses provided value

B4
// Function with default parameter
function multiply(a, b = 2) {
    return a * b;
}

// Test multiply
console.log(multiply(5));    // 10
console.log(multiply(5, 4)); // 20


// Function with default currency
function describeProduct(name, price, currency = "USD") {
    return `${name} costs ${price} ${currency}`;
}

// Test describeProduct
console.log(describeProduct("laptop", 999, "KES"));
console.log(describeProduct("phone", 500));