
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

 function displayResult() {
  document.getElementById("output").textContent = result;
}