/*Tatianna Davis
COMP 322
September 18, 2025*/

// make the main results table and add a header row
document.write('<table>');
document.write('<thead><tr><th>x</th><th>op</th><th>y</th><th>result</th></tr></thead>');
document.write('<tbody>');

const nums = [];  // keep track of correct results for the summary

while (true) {
  // ask the user for two numbers and an operator
  const xStr = prompt("Enter first number (x):");
  if (xStr === null) break;

  const yStr = prompt("Enter second number (y):");
  if (yStr === null) break;

  const op = prompt("Enter operator (+, -, *, /, %):");
  if (op === null) break;

  // turn the inputs into numbers
  const x = parseFloat(xStr);
  const y = parseFloat(yStr);

  let res, bad = false; // res = result or error text, bad = error flag

  // check if inputs are valid numbers
  if (isNaN(x) || isNaN(y)) {
    res = "wrong input number";
    bad = true;
  } else {
    // do the math depending on the operator
    switch ((op || "").trim()) {
      case "+": res = x + y; break;
      case "-": res = x - y; break;
      case "*": res = x * y; break;
      case "/": res = (y === 0) ? "computation error" : x / y; bad = (y === 0); break;
      case "%": res = (y === 0) ? "computation error" : x % y; bad = (y === 0); break;
      default:  res = "computation error"; bad = true;
    }
  }

  // add a row to the table showing what the user entered and the result
  document.write(
    "<tr><td>" + xStr + "</td><td>" + op + "</td><td>" + yStr + "</td><td>" +
    (bad ? "<span class='error'>" + res + "</span>" : res) +
    "</td></tr>"
  );

  // save the result if it’s a good number
  if (!bad && typeof res === "number" && !isNaN(res)) nums.push(res);

  // ask if the user wants to continue
  if (!confirm("More calculations? OK = continue, Cancel = exit.")) break;
}

// close the main results table
document.write('</tbody></table>');

// make the summary table using only the valid results
let min = "N/A", max = "N/A", avg = "N/A", total = "N/A";
if (nums.length) {
  total = nums.reduce((a, b) => a + b, 0);
  min = Math.min(...nums);
  max = Math.max(...nums);
  avg = total / nums.length;
}

// write the summary table
document.write('<table style="margin-top:10px">');
document.write('<thead><tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr></thead>');
document.write('<tbody><tr><td>' + min + '</td><td>' + max + '</td><td>' + avg + '</td><td>' + total + '</td></tr></tbody>');
document.write('</table>');
